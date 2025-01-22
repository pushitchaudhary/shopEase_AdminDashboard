import { createSlice } from "@reduxjs/toolkit";
import {  AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";

const supplierSlice = createSlice({
    name : 'supplier',
    initialState : {
        supplierList : null,
        singleSupplierData : null,
        supplierList_StatusON : null,
        alertData : null,
        supplierStatus : null,
        error : null
    },
    reducers : {
        setSupplierList(state, action){
            state.supplierList = action.payload
        },
        setSingleSupplier(state, action){
            state.singleSupplierData = action.payload
        },
        setSupplierList_StatusON(state, action){
            state.supplierList_StatusON = action.payload
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
            state.supplierStatus = null
        }
    }
})

export const {setSupplierList, setSupplierList_StatusON, setSingleSupplier, setAlertData, setStatus, setError, resetStatus} = supplierSlice.actions
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

export function fetchSupplierList(){
    return async function fetchSupplierThunk(dispatch) {
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/supplier-list')
            if(response.status == 200){
                dispatch(setSupplierList(response.data.message))
            }
        } catch (error) {
            dispatch(setError('Something went wrong !!!'))
            dispatch(STATUSES.ERROR)
        }
    }
}

export function deleteSupplier(supplierId){
    return async function deleteSupplierThunk(dispatch){

            try {
                const response = await AUTHENTICATED_ADMIN_API.delete(`/supplier/${supplierId}`)
                if(response.status == 200){
                    return { status : 200 };
                }else{
                    return {status : 400, message : 'Failed to delete supplier.'}
                }
            } catch (error) {
                if(error.response.status == 401){
                    dispatch(setError(error.response.data.message))
                    dispatch(setStatus(STATUSES.ERROR))
                }else{
                    return {status : 400, message : 'Failed to delete supplier.'}
                }   
            }
    
    }
}

export function fetchSingleSupplierDetails(supplierId){
    return async function fetchSingleSupplierDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get(`/supplier/${supplierId}`)
            if(response.status == 200){
                dispatch(setSingleSupplier(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function updateSupplierDetails(supplierId, formData){
    return async function updateSupplierDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_FILE_API.patch(`/supplier/${supplierId}`, formData)
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

export function fetchSupplierList_StatusON(){
    return async function fetchSupplierList_StatusONThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/supplier-list-status-on')
            if(response.status == 200){
                dispatch(setSupplierList_StatusON(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}