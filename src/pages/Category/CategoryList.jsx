import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'

function CategoryList() {
  return (
    <>
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
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Status</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-6 border-b border-grey-light">New York</td>
                                <td class="py-4 px-6 border-b border-grey-light">New York</td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
                                    <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
                                </td>
                            </tr>
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
