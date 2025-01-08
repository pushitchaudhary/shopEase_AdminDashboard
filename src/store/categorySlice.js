import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name : 'category',
    initialState : {
        categoryList : null,
        alertData : null,
        status : null,
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
            state.status = action.payload
        },
        setError(state, action){
            state.error = action.payload
        }
    }
})

export const {setCategoryList, setAlertData, setStatus, setError} = categorySlice.actions
export default categorySlice.reducer

export function addCategory(formData){
    return async function addCategoryThunk(dispatch){
        try {
            // const response = await 
        } catch (error) {
            
        }
    }
}