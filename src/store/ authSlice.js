import { createSlice } from "@reduxjs/toolkit";
import { Admin_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";


const authSlice = createSlice({
    name : 'authSlice',
    initialState : {
        authData : null,
        alertData : null,
        status : null,
        error : null
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
        },
        setError(state, action){
            state.error = action.payload
        }
    }
})


export const {setAuthData, setAlertData, setStatus, setError} = authSlice.actions
export default authSlice.reducer


export function login(formData){
    return async function loginThunk(dispatch){
        try {
            console.log('login triggred ')
            const response = await Admin_API.post('/admin-login', formData)

            if(response.status == 200){
                dispatch(setStatus(STATUSES.SUCCESS))
                localStorage.setItem('adminJWT', response.data.message);
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
            dispatch(setError(error.response.data.message));
        }
    }
}
