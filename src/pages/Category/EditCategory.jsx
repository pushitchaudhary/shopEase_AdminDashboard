import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, fetchSingleCategoryDetail, resetStatus, updateCategoryDetails } from '../../store/categorySlice'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses'

function EditCategory() {
    const dispatch = useDispatch()
    const categoryId = useParams().categoryId
    const [categoryName, setCategoryName] = useState('')
    const [status, setStatus] = useState(0)

    const {singleCategoryDetail,alertData, categoryStatus, error}  = useSelector((state)=>state.categoryData)

    // Fetch Single Cateogory Details
    useEffect(()=>{
        dispatch(fetchSingleCategoryDetail(categoryId))
    },[categoryId])

    // Store value in field
    useEffect(()=>{
        if(singleCategoryDetail){
            setCategoryName(singleCategoryDetail.name)
            setStatus(singleCategoryDetail.status)
        }
    },[singleCategoryDetail])

    // Handle Update Submit Button
    const handleUpdateSubmitBtn = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('categoryName', categoryName)
        formData.append('status', status)
        dispatch(updateCategoryDetails(categoryId, formData))
    }

    // Tostify Alert
    useEffect(()=>{
        if(categoryStatus == STATUSES.SUCCESS){
            toast.success(alertData || "Successfully Cateogory Added")
            dispatch(resetStatus())
        }else if(categoryStatus == STATUSES.ERROR){
            toast.error(error || "Something went wrong !!")
            dispatch(resetStatus())
        }
    },[alertData, categoryStatus, error, dispatch])

    return (
    <>
    <ToastContainer/>
    <div className='flex bg-gray-100'>
        <Sidebar/>
        <div className='w-full mt-4 ml-4'>
            <div className='flex jus'>

                <Link to='/category'><p className='text-xl font-bold hover:underline'>Category</p> </Link>
                <p className='text-xl px-1 font-bold'> {' > '} </p> 
                <p className='text-xl font-bold'> Edit Category </p> 
            </div>
            <div class="flex items-center w-full justify-center p-12 ">
                <div class="mx-auto  w-6/12">
                    <form >
                        <div class="mb-5">
                            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                Name
                            </label>
                            <input type="text" onChange={(e)=>setCategoryName(e.target.value)} value={categoryName} name="name" id="name" placeholder="Category Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div class="mb-5">
                            <label for="status" class="mb-3 block text-base font-medium text-[#07074D]">
                                Status
                            </label>
                            <select name="status" onChange={(e)=>setStatus(e.target.value)} value={status} id="status" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                <option value="1">Active</option>
                                <option value="0">Deactive</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={handleUpdateSubmitBtn} class="hover:shadow-form rounded-md bg-teal-500 py-3 px-8 text-base font-semibold text-white outline-none">
                                Edit 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditCategory
