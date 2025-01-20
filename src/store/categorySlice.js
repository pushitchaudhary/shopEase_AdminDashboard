import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED_ADMIN_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";


const categorySlice = createSlice({
    name : 'category',
    initialState : {
        categoryList : null,
        singleCategoryDetail : null,
        alertData : null,
        categoryStatus : null,
        error : null
    },
    reducers : {
        setCategoryList(state, action){
            state.categoryList = action.payload
        },
        setSingleCategoryDetail(state, action){
            state.singleCategoryDetail = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        setStatus(state, action){
            state.categoryStatus = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        resetStatus(state){
            state.categoryStatus = null
        }
    }
})

export const {setCategoryList, setSingleCategoryDetail, setAlertData, setStatus, setError, resetStatus} = categorySlice.actions
export default categorySlice.reducer

export function addCategory(formData){
    return async function addCategoryThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.post('/category',formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function fetchCategoryList(){
    return async function fetchCategoryListThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/category')
            if(response.status == 200){
                dispatch(setCategoryList(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function fetchSingleCategoryDetail(categoryId){
    return async function fetchSingleCategoryDetailThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get(`/category/${categoryId}`)
            if(response.status == 200){
                dispatch(setSingleCategoryDetail(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function updateCategoryDetails(categoryId, formData){
    return async function updateCategoryDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.patch(`/category/${categoryId}`, formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteCategoryDetails(categoryId){
    return async function deleteCategoryDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.delete(`/category/${categoryId}`)
            if(response.status == 200){
                return { status : 200 };
            }else{
                return {status : 400, message : 'Failed to delete category.'}
            }
        } catch (error) {
            if(error.response.status == 401){
                dispatch(setError(error.response.data.message))
                dispatch(setStatus(STATUSES.ERROR))
            }else if(error.response.status == 404){
                dispatch(setError(error.response.data.message))
                dispatch(setStatus(STATUSES.ERROR))
            }
            else{
                return {status : 400, message : 'Failed to delete supplier.'}
            }   
        }
    }
}