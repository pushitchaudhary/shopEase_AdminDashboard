import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSupplier, fetchSupplierList, resetStatus } from '../../store/supplierSlice'
import { STATUSES } from '../../store/statuses'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAndDelete } from '../../service/DeleteAndConfirm'
import { deleteStaff, fetchStaffList } from '../../store/staffSlice'

function StaffList() {
  const dispatch = useDispatch()
  const {staffList, alertData, staffStatus, error} = useSelector((state)=>state.staffData)

  // Fetch Staff list
  useEffect(()=>{
    dispatch(fetchStaffList())
  },[])

  // Delete Staff
  const deleteStaffHandler = async (staffId)=>{
    await confirmAndDelete(async () => {
      const response = await dispatch(deleteStaff(staffId))
      if (response.status == 200) {
        dispatch(fetchStaffList())
        return { status: 200, message : "The staff was successfully deleted." }; // Return failure if the API succeeds
      }else if(response.status != 401){
        return { status: 400, message : "Failed to delete the staff. Please try again later." }; // Return success if the API fails
      }
     
    });
  }

  // Tostify Alert
  useEffect(()=>{
    if(staffStatus == STATUSES.ERROR){
      toast.error(error || "Something went wrong !!")
      dispatch(resetStatus())
    }
  },[alertData, staffStatus, error, dispatch])


  return (
    <>
    <ToastContainer/>
    <div className='flex'>
      <Sidebar/>
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-blue-800 text-xl font-semibold uppercase">Staff</h2>
          </div>
          <div class="flex items-center justify-between">
              <div class="lg:ml-40 ml-10 space-x-8">
                <Link to='/add-staff' class="bg-teal-500 px-4 py-3 rounded-md text-white font-semibold tracking-wide cursor-pointer">Add Staff</Link>
                <button class="bg-teal-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Export</button>
              </div>
            </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> S.N</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Name</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Email</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Phone</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Birth</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Gender</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Address</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Status</th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Action</th>
                  </tr>
                </thead>
                <tbody>
                   {
                    staffList ? <>
                    {
                      staffList && staffList.map((staff, index)=>(
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap">{index+1}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img class="w-full h-full rounded-full" src={staff?.profilePictureUrl} alt={staff?.name} />
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap"> {staff?.name} </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap">{staff?.email}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap"> {staff?.phoneNumber}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap"> {staff?.dateOfBirth}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap"> {staff?.gender}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap"> {staff?.address}</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <p class="text-gray-900 whitespace-no-wrap"> {new Date(staff?.createdAt).toLocaleDateString()} {new Date(staff?.createdAt).toLocaleTimeString()}</p>
                        </td>
                        {
                          staff?.status == 1 ? <>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                              <p class="text-gray-900 whitespace-no-wrap"> Active</p>
                            </td>
                          </> : <>
                            <td class="px-5 py-5 border-b border-gray-200 bg-red text-xs">
                              <p class="text-gray-900 whitespace-no-wrap"> Deactive</p>
                            </td>
                          </>
                        }
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                          <Link to={`/edit-staff/${staff.id}`}>
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span  aria-hidden class="absolute cursor-pointer inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span class="relative">Edit</span>
                          </span>
                          </Link>
                          <span onClick={()=>deleteStaffHandler(staff.id)} class="relative cursor-pointer mt-3 inline-block px-3 py-1 text-xs font-semibold text-green-900 leading-tight">
                            <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                            <span class="relative">Delete</span>
                          </span>
                        </td>
                      </tr>
                      ))
                    }
                    </> 
                    : <>xhain</>
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

export default StaffList
