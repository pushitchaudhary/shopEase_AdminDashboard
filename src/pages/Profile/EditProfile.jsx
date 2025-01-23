import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSupplier, fetchSingleSupplierDetails, resetStatus, updateSupplierDetails } from '../../store/supplierSlice'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses'
import { fetchSingleStaffDetails, resetStaffStatus, updateStaffDetails } from '../../store/staffSlice'
import { fetchProfileDetails, resetProfileStatus, updateProfileDetails } from '../../store/profileSlice'

function EditProfile() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [profile, setProfile] = useState(null)
    const fileInputRef = useRef(null);

    // Import necessary hooks and utilities (assumed to be present)
    const {profileDetails, profileStatus, alertData, error} = useSelector((state)=>state.profileData)

    // Fetch profile Details
    useEffect(()=>{
        dispatch(fetchProfileDetails())
    },[])

    // Storing Value in field
    useEffect(()=>{
        if(profileDetails){
            setName(profileDetails.name)
            setEmail(profileDetails.email)
            setPhone(profileDetails.phoneNumber)
            setDateOfBirth(profileDetails.dateOfBirth)
            setGender(profileDetails.gender)
            setAddress(profileDetails.address)
        }
    },[profileDetails])
    

    // Tostify Alert
    useEffect(()=>{
        if(profileStatus == STATUSES.SUCCESS){
            toast.success(alertData || 'Successfully Profile Upadated')
            dispatch(resetProfileStatus())
        }else if(profileStatus == STATUSES.ERROR){
            toast.error(error || "Something went wrong !!")
            dispatch(resetProfileStatus())
        }

    },[alertData, profileStatus, error, dispatch])

    // Submission 
    const handleUpdateSubmitBtn = (e)=>{
        e.preventDefault() 
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('dateOfBirth', dateOfBirth)
        formData.append('gender', gender)
        formData.append('address', address)
        formData.append('profile', profile)
        dispatch(updateProfileDetails(formData))
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
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Edit Profile</h2>
                </div>
            </div>
            <div className='mt-4'>
                <div class="bg-white border-4 rounded-lg shadow relative ">
                    <div class="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 class="text-xl font-semibold">
                            Edit Profile
                        </h3>
                    </div>
                    <div class="p-6 space-y-6">
                        <form action="#">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Staff Name" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@gmail.com" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="phone" class="text-sm font-medium text-gray-900 block mb-2">Phone</label>
                                    <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} name="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Phone Number" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="profile" class="text-sm font-medium text-gray-900 block mb-2">Profile</label>
                                    <input type="file" onChange={(e)=>setProfile(e.target.files[0])} ref={fileInputRef} name="profile" id="profile" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="date" class="text-sm font-medium text-gray-900 block mb-2">Date of birth</label>
                                    <input type="date" onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirth} name="date" id="date" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Gender</label>
                                    <select  name="gender" onChange={(e)=>setGender(e.target.value)} value={gender} id="gender"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                    <option value="" disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="address" class="text-sm font-medium text-gray-900 block mb-2">Address</label>
                                    <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} name="address" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Pokhara" required=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleUpdateSubmitBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
