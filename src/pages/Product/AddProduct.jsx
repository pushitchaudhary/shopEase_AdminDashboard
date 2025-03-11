import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSupplier, fetchSupplierList_StatusON } from '../../store/supplierSlice'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses'
import { addProduct, resetStatus } from '../../store/productSlice'
import { fetchCategoryList_StatusON } from '../../store/categorySlice'

function AddProduct() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stockQuantity, setStockQuantity] = useState('')
    const [weight, setWeight] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [supplierId, setSupplierId] = useState('')
    const [status, setStatus] = useState('')
    const [productImage, setProductImage] = useState(null)
    const fileInputRef = useRef(null);

    // Import necessary hooks and utilities (assumed to be present)
    const {alertData, productStatus, error} = useSelector((state)=>state.productData)
    const {categoryList_StatusON} = useSelector((state)=>state.categoryData)
    const {supplierList_StatusON} = useSelector((state)=>state.supplierData)


    console.log(categoryList_StatusON)
    // Clear Form Values after successful submission
    const clearFormValue = ()=>{
        console.log('trigged clearFormValue')
        setName('')
        setDescription('')
        setPrice('')
        setStockQuantity('')
        setWeight('')
        setCategoryId('')
        setSupplierId('')
        setStatus()
        setProductImage(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = null; // Reset the file input
        }
    }

    useEffect(()=>{
        dispatch(fetchCategoryList_StatusON())
        dispatch(fetchSupplierList_StatusON())
    },[])

    // Tostify Alert
    useEffect(()=>{
        if(productStatus == STATUSES.SUCCESS){
            toast.success(alertData || 'Successfully Supplier Added')
            dispatch(resetStatus())
        }else if(productStatus == STATUSES.ERROR){
            toast.error(error || "Something went wrong !!")
            dispatch(resetStatus())
        }

    },[alertData, productStatus, error, dispatch])

    // Submission 
    const handleSubmitBtn = (e)=>{
        e.preventDefault() 
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('stockQuantity', stockQuantity)
        formData.append('weight', weight)
        formData.append('categoryId', categoryId)
        formData.append('supplierId', supplierId)
        formData.append('status', status)
        formData.append('productImage', productImage)
        dispatch(addProduct(formData))
        clearFormValue()
    }

    return (
    <>
    <ToastContainer />
    <div className='flex '>
        <Sidebar/>
        <div class="bg-gray-100 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">
                <div className='flex'>
                    <Link to='/product-list'>
                    <h2 class="text-blue-800 text-xl font-semibold hover:underline uppercase">Product</h2>
                    </Link>
                    <h2 class="text-black text-xl px-1 font-bold uppercase">{' > '}</h2>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Add Product</h2>
                </div>
            </div>
            <div className='mt-4'>
                <div class="bg-white border-4 rounded-lg shadow relative ">
                    <div class="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 class="text-xl font-semibold">
                            Add Product
                        </h3>
                    </div>
                    <div class="p-6 space-y-6">
                        <form action="#">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Product Name" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Image" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
                                    <input type="file" onChange={(e)=>setProductImage(e.target.files[0])} ref={fileInputRef} name="Image" id="Image" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Image" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="description" class="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                    <textarea type="text" onChange={(e)=>setDescription(e.target.value)} value={description} name="description" id="description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Description" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Price" class="text-sm font-medium text-gray-900 block mb-2">Price (per piece)</label>
                                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} name="Price" id="Price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="NRP. 2300" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Quantity" class="text-sm font-medium text-gray-900 block mb-2">Stock Quantity</label>
                                    <input type="text" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity} name="Quantity" id="Quantity" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="100" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Category" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
                                    <select  name="status" onChange={(e)=>setCategoryId(e.target.value)} value={categoryId} id="Category"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        {
                                            categoryList_StatusON && categoryList_StatusON.map((category, index)=>(
                                                <option value={category.id}>{category?.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Supplier" class="text-sm font-medium text-gray-900 block mb-2">Supplier</label>
                                    <select  name="status" onChange={(e)=>setSupplierId(e.target.value)} value={supplierId} id="Supplier"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        {
                                           supplierList_StatusON && supplierList_StatusON.map((supplier, index)=>(
                                                <option value={supplier.id}>{supplier?.name} - {supplier?.email}</option>
                                           ))
                                        }
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Weight" class="text-sm font-medium text-gray-900 block mb-2">Weight</label>
                                    <input type="text" onChange={(e)=>setWeight(e.target.value)} value={weight} name="Weight" id="Weight" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="10" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="status" class="text-sm font-medium text-gray-900 block mb-2">Status</label>
                                    <select  name="status" onChange={(e)=>setStatus(e.target.value)} value={status} id="status"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        <option value="1">Active</option>
                                        <option value="0">Deactive</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleSubmitBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct
