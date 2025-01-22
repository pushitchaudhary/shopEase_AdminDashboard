import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";

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
        resetProductStatus(state){
            state.productStatus = null
        }
    }
})

const {setProductList, setSingleProductDetails, setAlertData, setProductStatus, setError,resetProductStatus,  setErrorreset} = productSlice.actions
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
            const response = await AUTHENTICATED_ADMIN_API.get()
            if(response.status == 200){
                dispatch(setProductList(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProductStatus(STATUSES.ERROR))
        }
    }
}