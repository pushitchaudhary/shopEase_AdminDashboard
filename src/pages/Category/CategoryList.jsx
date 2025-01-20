import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategoryDetails, fetchCategoryList, resetStatus } from '../../store/categorySlice'
import { confirmAndDelete } from '../../service/DeleteAndConfirm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses'

function CategoryList() {
    const dispatch = useDispatch()

    const {categoryList, categoryStatus, error} = useSelector((state)=>state.categoryData)

    // Fetching Category List
    useEffect(()=>{
        dispatch(fetchCategoryList())
    },[])   

    // Delete Supplier
    const deleteCategoryHandler = async (categoryId)=>{
        await confirmAndDelete(async () => {
            const response = await dispatch(deleteCategoryDetails(categoryId))
            if (response.status == 200) {
                dispatch(fetchCategoryList())
                return { status: 200, message : "The category was successfully deleted." }; // Return failure if the API succeeds
            }else if(response.status != 401){
                return { status: 400, message : "Failed to delete the category. Please try again later." }; // Return success if the API fails
            }
            
        });
    }

    // Tostify Alert
    useEffect(()=>{
        if(categoryStatus == STATUSES.ERROR){
        toast.error(error || "Something went wrong !!")
        dispatch(resetStatus())
        }
    },[ categoryStatus, error, dispatch])


    return (
    <>
    <ToastContainer/>
    <div className='flex bg-gray-100'>
        <Sidebar/>
        <div className='w-full mt-4 ml-4'>
            <p className='text-xl font-bold'>Category </p>
            
            <div class="flex justify-end mr-4">
                <Link to='/add-category' class="pr-4 rounded-lg bg-teal-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
                    Add Category
                </Link>
            </div>


            <div class="flex items-center w-full justify-center ">
                <div class="mx-auto  w-full">
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="text-left w-full border-collapse"> 
                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">S.N</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Status</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Updated</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryList ? <> 
                                {
                                    categoryList && categoryList.map((category, index)=>(
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">{index+1}</td>
                                            <td class="py-4 px-6 border-b border-grey-light">{category?.name}</td>
                                            {
                                                category.status == 1 ? <>
                                                    <td class="py-4 px-6 border-b border-grey-light">Active</td>
                                                </> : <>
                                                    <td class="py-4 px-6 border-b border-grey-light">Deactive</td>
                                                </>
                                            }
                                            <td class="py-4 px-6 border-b border-grey-light">{new Date(category?.updatedAt).toDateString()}</td>
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                <Link to={`/edit-category/${category.id}`} href="#" class="text-grey-lighter mr-2 font-bold py-1 px-3 rounded text-xs bg-green-300 hover:bg-green-dark">Edit</Link>
                                                <a onClick={()=>deleteCategoryHandler(category.id)} class="text-grey-lighter cursor-pointer font-bold py-1 px-3 rounded text-xs bg-red-300 hover:bg-blue-dark">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </> : <>Data Xhain</>
                            }
                           
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CategoryList
