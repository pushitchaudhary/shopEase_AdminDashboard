import { createSlice } from "@reduxjs/toolkit";
import { Admin_API, AUTHENTICATED_ADMIN_API } from "../http/AXIOSAPI";

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

export function addSupplier(formData){
    return async function addSupplierThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.post(formData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}
