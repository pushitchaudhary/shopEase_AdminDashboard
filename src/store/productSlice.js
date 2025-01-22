import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";
import { rtrim } from "validator";

const productSlice = createSlice({
    name : 'productSlice',
    initialState : {
        productList : null,
        singleProductDetail : null,
        alertData : null,
        productStatus : null,
        error : null
    },
    reducers : {
        setProductList(state, action){
            state.productList = action.payload
        },
        setSingleProductDetails(state, action){
            state.singleProductDetail = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        setProductStatus(state, action){
            state.productStatus = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        resetStatus(state){
            state.productStatus = null
        }
    }
})

export const {setProductList, setSingleProductDetails, setAlertData, setProductStatus, setError, resetStatus} = productSlice.actions
export default productSlice.reducer

export function addProduct(formData){
    return async function addProductThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_FILE_API.post('/product', formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setProductStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProductStatus(STATUSES.ERROR))
        }
    }
}

export function fetchProductList(){
    return async function fetchProductListThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/product')
            if(response.status == 200){
                dispatch(setProductList(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProductStatus(STATUSES.ERROR))
        }
    }
}

export function deleteProduct(productId){
    return async function deleteProductThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.delete(`/product/${productId}`)
            if(response.status == 200){
                return { status : 200 };
            }else{
                return {status : 400, message : 'Failed to delete product.'}
            }
        } catch (error) {
            if(error.response.status == 401){
                dispatch(setError(error.response.data.message))
                dispatch(setProductStatus(STATUSES.ERROR))
            }else if(error.response.status == 404){
                dispatch(setError(error.response.data.message))
                dispatch(setProductStatus(STATUSES.ERROR))
            }
            else{
                return {status : 400, message : 'Failed to delete product.'}
            } 
        }
    }
}

export function fetchSingleProductDetail(productId){
    return async function fetchSingleProductListThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get(`/product/${productId}`)
            if(response.status == 200){
                dispatch(setSingleProductDetails(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProductStatus(STATUSES.ERROR))
        }
    }
}

export function updateProductDetails(productId,formData){
    return async function updateProductDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.patch(`/product/${productId}`, formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setProductStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProductStatus(STATUSES.ERROR))
        }
    }
}