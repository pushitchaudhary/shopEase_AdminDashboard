import { createSlice } from "@reduxjs/toolkit";
import { Admin_API } from "../http/AXIOSAPI";


const authSlice = createSlice({
    name : 'authSlice',
    initialState : {
        authData : null,
        alertData : null,
        status : null
    },
    reducers : {
        setAuthData(state, action){
            state.authData = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        }, 
        setStatus(state, action){
            state.status = action.payload
        }
    }
})


export const {setAuthData, setAlertData, setStatus} = authSlice.actions
export default authSlice.reducer


export function login(formData){
    return async function loginThunk(dispatch){
        try {
            console.log('login triggred ')
            const response = await Admin_API.post('/admin-login', formData)
            console.log(response)
        } catch (error) {
            
        }
    }
}
