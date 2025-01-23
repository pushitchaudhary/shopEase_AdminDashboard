import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses'
import { changePassword, fetchProfileDetails, resetProfileStatus, updateProfileDetails } from '../../store/profileSlice'

function ChangePassword() {
    const dispatch = useDispatch()
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')


    // Import necessary hooks and utilities (assumed to be present)
    const { profileStatus, alertData, error} = useSelector((state)=>state.profileData)

    // Fetch profile Details
    useEffect(()=>{
        dispatch(fetchProfileDetails())
    },[])

    const clearFormValue = ()=>{
        setNewPassword('')
        setConfirmPassword('')
        setCurrentPassword('')
    }

    // Tostify Alert
    useEffect(()=>{
        if(profileStatus == STATUSES.SUCCESS){
            toast.success(alertData || 'Successfully Profile Upadated')
            dispatch(resetProfileStatus())
            clearFormValue()
        }else if(profileStatus == STATUSES.ERROR){
            toast.error(error || "Something went wrong !!")
            dispatch(resetProfileStatus())
        }

    },[alertData, profileStatus, error, dispatch])

    // Submission 
    const handleChangePassword = (e)=>{
        e.preventDefault() 
        const formData = new FormData()
        formData.append('newPassword', newPassword)
        formData.append('confirmPassword', confirmPassword)
        formData.append('currentPassword', currentPassword)
        dispatch(changePassword(formData))
    }

    return (
    <>
    <ToastContainer />
    <div className='flex '>
        <Sidebar/>
        <div class="bg-gray-100 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">
                <div className='flex'>
                    <Link to='/profile'>
                        <h2 class="text-blue-800 text-xl font-semibold hover:underline uppercase">Profile</h2>
                    </Link>
                    <h2 class="text-black text-xl px-1 font-bold uppercase">{' > '}</h2>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Change Password</h2>
                </div>
            </div>
            <div className='mt-4'>
                <div class="bg-white border-4 rounded-lg shadow relative ">
                    <div class="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 class="text-xl font-semibold">
                            Change Password
                        </h3>
                    </div>
                    <div class="p-6 space-y-6">
                        <form action="#">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-8 sm:col-span-6">
                                    <label for="newPassword" class="text-sm font-medium text-gray-900 block mb-2">New Password</label>
                                    <input type="password" onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} name="newPassword" id="newPassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="New Password" required=""/>
                                </div>
                                <div class="col-span-8 sm:col-span-6">
                                    <label for="CPass" class="text-sm font-medium text-gray-900 block mb-2">Confirm Password</label>
                                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} name="CPass" id="CPass" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Confirm Password" required=""/>
                                </div>
                                <div class="col-span-8 sm:col-span-6">
                                    <label for="currentPass" class="text-sm font-medium text-gray-900 block mb-2">Current Password</label>
                                    <input type="password" onChange={(e)=>setCurrentPassword(e.target.value)} value={currentPassword} name="currentPass" id="currentPass" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Current Password" required=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleChangePassword} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
