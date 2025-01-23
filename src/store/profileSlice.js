import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API } from "../http/AXIOSAPI";
import { STATUSES } from "./statuses";


const profileSlice = createSlice({
    name : 'profileSlice',
    initialState : {
        profileDetails : null,
        profileStatus : null,
        alertData : null,
        error : null
    },
    reducers : {
        setProfileDetails(state, action){
            state.profileDetails = action.payload
        },
        setProfileStatus(state, action){
            state.profileStatus = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        resetProfileStatus(state){
            state.profileStatus = null
        }
    }
})

export const {setProfileStatus, setProfileDetails, setAlertData, setError, resetProfileStatus} = profileSlice.actions
export default profileSlice.reducer

export function fetchProfileDetails(){
    return async function fetchProfileDetailsThunK(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get(`/profile`)
            if(response.status == 200){
                dispatch(setProfileDetails(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProfileStatus(STATUSES.ERROR))
        }
    }
}


export function updateProfileDetails(formData){
    return async function updateProfileDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_FILE_API.patch('/profile',formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setProfileStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setProfileStatus(STATUSES.ERROR))
        }
    }
}
