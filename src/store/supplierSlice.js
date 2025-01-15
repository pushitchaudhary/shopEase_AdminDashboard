import { createSlice } from "@reduxjs/toolkit";
import {  AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";

const supplierSlice = createSlice({
    name : 'supplier',
    initialState : {
        supplierList : null,
        alertData : null,
        supplierStatus : null,
        error : null
    },
    reducers : {
        setSupplierList(state, action){
            state.supplierList = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        setStatus(state, action){
            state.supplierStatus = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        resetStatus(state){
            state.status = null
        }
    }
})

export const {setSupplierList, setAlertData, setStatus, setError, resetStatus} = supplierSlice.actions
export default supplierSlice.reducer

export function addSupplier(formData){
    return async function addSupplierThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_FILE_API.post('/add-supplier', formData)
            if(response.status == 200){
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(setAlertData(response.data.message))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
            dispatch(setError(error.response.data.message))
        }
    }
}
