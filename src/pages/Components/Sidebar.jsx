import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/shopEase.png';

function Sidebar() {

    const logout = () => {
        // Remove the JWT from localStorage
        localStorage.removeItem('UserJWT');
        window.location.href = '/login'; 
      };
      

    return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
    <div class="min-h-screen flex flex-row bg-gray-100">
        <div class="flex flex-col w-80 bg-white rounded-r-3xl overflow-hidden">
        <div class=" items-center pb-4 justify-center shadow-md">
            <img alt="Your Company" src={Logo} className="mx-auto h-28 w-auto"/>
            <div className="flex text-xl items-center justify-center">
            <h6 className="text-md uppercase text-blue-800 font-extrabold">Admin Dashboard</h6>
            </div>

        </div>
        <ul class="flex flex-col py-4">
            <li>
            <Link to='/'  class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                <span class="text-sm font-medium">Dashboard</span>
            </Link>
            </li>
            <li>
            <Link to='/category' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg>
                </span>
                <span class="text-sm font-medium">Category</span>
            </Link>
            </li>
            <li>
            <Link to="/product-list" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                </span>
                <span class="text-sm font-medium">Product</span>
            </Link>
            </li>
            <li>
            <Link to='/supplier-list' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                <span class="text-sm font-medium">Supplier</span>
            </Link>
            </li>
            <li>
            <Link to='/staff-list' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                <span class="text-sm font-medium">Staff</span>
            </Link>
            </li>
            <li>
            <Link to='/profile' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                <span class="text-sm font-medium">Profile</span>
            </Link>
            </li>
         
            <li>
            <a href="#" onClick={logout} class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                <span class="text-sm font-medium">Logout</span>
            </a>
            </li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar
