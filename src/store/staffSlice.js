import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./statuses";
import { AUTHENTICATED_ADMIN_API, AUTHENTICATED_ADMIN_FILE_API } from "../http/AXIOSAPI";


const staffSlice = createSlice({
    name : 'staffSlice',
    initialState : {
        staffList : null,
        singleStaffDetail : null,
        alertData : null,
        staffStatus : null,
        error : null
    },
    reducers : {
        setStaffList(state, action){
            state.staffList = action.payload
        },
        setSingleStaffDetail(state, action){
            state.singleStaffDetail = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        setStaffStatus(state, action){
            state.staffStatus = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        resetStaffStatus(state, action){
            state.staffStatus = null
        }
    }
})

export const {setStaffList, setSingleStaffDetail, setAlertData, setStaffStatus, setError, resetStaffStatus } = staffSlice.actions
export default staffSlice.reducer


export function addStaff(formData){
    return async function addStaffThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_FILE_API.post('/staff', formData)
            if(response.status == 200){
                dispatch(setStaffStatus(STATUSES.SUCCESS))
                dispatch(setAlertData(response.data.message))
            }
        } catch (error) {
            dispatch(setStaffStatus(STATUSES.ERROR))
            dispatch(setError(error.response.data.message))
        }
    }
}

export function fetchStaffList(){
    return async function fetchStaffThunk(dispatch) {
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/staff')
            if(response.status == 200){
                dispatch(setStaffList(response.data.message))
            }
        } catch (error) {
            dispatch(setError('Something went wrong !!!'))
            dispatch(setStaffStatus(STATUSES.ERROR))
        }
    }
}

export function fetchSingleStaffDetails(staffId){
    return async function fetchSingleStaffDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get(`/staff/${staffId}`)
            if(response.status == 200){
                dispatch(setSingleStaffDetail(response.data.message))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStaffStatus(STATUSES.ERROR))
        }
    }
}

export function updateStaffDetails(staffId, formData){
    return async function updateStaffDetailsThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_FILE_API.patch(`/staff/${staffId}`, formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setStaffStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setError(error.response.data.message))
            dispatch(setStaffStatus(STATUSES.ERROR))
        }
    }
}

export function deleteStaff(staffId){
    return async function deleteStaffThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.delete(`/staff/${staffId}`)
            if(response.status == 200){
                return { status : 200 };
            }else{
                return {status : 400, message : 'Failed to delete staff.'}
            }
        } catch (error) {
            if(error.response.status == 401){
                dispatch(setError(error.response.data.message))
                dispatch(setStaffStatus(STATUSES.ERROR))
            }else{
                return {status : 400, message : 'Failed to delete staff.'}
            }   
        }
    }
}