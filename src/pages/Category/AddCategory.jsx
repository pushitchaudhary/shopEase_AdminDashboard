import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../store/categorySlice'

function AddCategory() {
    const dispatch = useDispatch()
    const [categoryName, setCategoryName] = useState('')
    const [status, setStatus] = useState(0)


    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('categoryName', categoryName)
        formData.append('status', status)
        dispatch(addCategory(formData))
    }

    return (
    <>
    <div className='flex bg-gray-100'>
        <Sidebar/>
        <div className='w-full mt-4 ml-4'>
            <div className='flex jus'>

                <Link to='/category'><p className='text-xl font-bold hover:underline'>Category</p> </Link>
                <p className='text-xl px-1 font-bold'> {' > '} </p> 
                <p className='text-xl font-bold'> Add Category </p> 
            </div>
            <div class="flex items-center w-full justify-center p-12 ">
                <div class="mx-auto  w-6/12">
                    <form >
                        <div class="mb-5">
                            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                Name
                            </label>
                            <input type="text" onChange={(e)=>setCategoryName(e.target.value)} name="name" id="name" placeholder="Category Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div class="mb-5">
                            <label for="status" class="mb-3 block text-base font-medium text-[#07074D]">
                                Status
                            </label>
                            <select name="status" onChange={(e)=>setStatus(e.target.value)} id="status" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={handleSubmit} class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                Add 
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

export default AddCategory
