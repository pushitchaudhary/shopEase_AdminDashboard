import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED_ADMIN_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";


const categorySlice = createSlice({
    name : 'category',
    initialState : {
        categoryList : null,
        alertData : null,
        categoryStatus : null,
        error : null
    },
    reducers : {
        setCategoryList(state, action){
            state.categoryList = action.payload
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

export const {setCategoryList, setAlertData, setStatus, setError, resetStatus} = categorySlice.actions
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