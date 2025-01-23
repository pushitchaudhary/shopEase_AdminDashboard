import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileDetails, resetProfileStatus } from '../../store/profileSlice'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses';
import { Link } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch()

    const {profileDetails, profileStatus, alertData, error} = useSelector((state)=>state.profileData)

    // Fetch profile Details
    useEffect(()=>{
        dispatch(fetchProfileDetails())
    },[])


    // Tostify Alert
    useEffect(()=>{
        if(profileStatus == STATUSES.ERROR){
            toast.error(error || "Something went wrong !!")
            dispatch(resetProfileStatus())
        }
    },[alertData, profileStatus, error, dispatch])

    return (
    <>
    <ToastContainer/>
    <div className='flex'>
        <Sidebar/>
        <div className='bg-white p-8 rounded-md w-full'>
            <div class="h-full bg-gray-200 ">
                <div class="bg-white rounded-lg shadow-xl pb-8">
                    <div class="w-full h-[250px]">
                        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" class="w-full h-full rounded-tl-lg rounded-tr-lg"/>
                    </div>
                    <div class="flex flex-col items-center -mt-20">
                        <img src={profileDetails?.profilePictureUrl} class="w-40 border-4 border-white rounded-full"/>
                        <div class="flex items-center space-x-2 mt-2">
                            <p class="text-2xl">{profileDetails?.name}</p>
                            {
                                profileDetails ? <>
                                <span class="bg-blue-500 rounded-full p-1" title="Verified">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                </> : ""
                            }
                           
                        </div>
                        <p class="text-gray-700">{profileDetails?.email}</p>
                        <p class="text-sm text-gray-500">{profileDetails?.address}</p>
                    </div>
                    
                    <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                    {profileDetails ? <>
                        <div class="flex items-center space-x-4 mt-2">
                            <Link to='/edit-profile'>
                                <button class="flex items-center bg-cyan-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                    <span>Edit Profile</span>
                                </button>
                            </Link>
                            <Link to='/change-password'>
                                <button class="flex items-center bg-cyan-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                    <span>Change Password</span>
                                </button>
                            </Link>
                        </div>
                        </> : ""
                    }
                    </div>
                </div>

                <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                    <div class="w-full flex flex-col 2xl:w-1/3">
                        <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
                            <ul class="mt-2 text-gray-700">
                                <li class="flex border-y py-2">
                                    <span class="font-bold w-24">Name:</span>
                                    <span class="text-gray-700">{profileDetails?.name}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Email:</span>
                                    <span class="text-gray-700">{profileDetails?.email}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Phone:</span>
                                    <span class="text-gray-700">{profileDetails?.phoneNumber}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-28">Date of birth:</span>
                                    <span class="text-gray-700">{profileDetails?.dateOfBirth}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Gender</span>
                                    <span class="text-gray-700">{profileDetails?.gender}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Address</span>
                                    <span class="text-gray-700">{profileDetails?.address}</span>
                                </li>
                                <li class="flex border-b py-2">
                                    <span class="font-bold w-24">Join Date:</span>
                                    <span class="text-gray-700">{new Date(profileDetails?.createdAt).toDateString()}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Profile
