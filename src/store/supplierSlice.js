import { createSlice } from "@reduxjs/toolkit";

const supplierSlice = createSlice({
    name : 'supplier',
    initialState : {
        supplierList : null,
        alertData : null,
        status : null,
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
            state.status = action.payload
        },
        setError(state, action){
            state.error = action.payload
        }
    }
})

export const {setSupplierList, setAlertData, setStatus, setError} = supplierSlice.actions
export default supplierSlice.reducer

