import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodaySellAmountInfo, fetchTodaySellInfo, fetchTopSellProduct, fetchTotalProductInfo, fetchTotalSellAmountInfo, fetchTotalSellInfo } from '../../store/infoSlice'

function Dashboard() {
  const dispatch = useDispatch()
  const {totalProduct, totalSell, totalSellAmount, todaySell, todaySellAmount, topSellProduct} = useSelector((state)=>state.infoData)

  useEffect(()=>{
    dispatch(fetchTotalProductInfo())
    dispatch(fetchTotalSellInfo())
    dispatch(fetchTotalSellAmountInfo())
    dispatch(fetchTodaySellInfo())
    dispatch(fetchTodaySellAmountInfo())
    dispatch(fetchTopSellProduct())
  },[])

  return (
  <>
  <div className='flex'>
    <Sidebar/>
    <div className='w-full'>

{/* 1st Row */}
<div className="flex flex-wrap justify-evenly  p-6 w-full">
  <div className="w-1/4">
    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
      <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
        <svg viewBox="0 0 512 512" className='h-8' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>product-management</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(42.666667, 34.346667)"> <path d="M426.247658,366.986259 C426.477599,368.072636 426.613335,369.17172 426.653805,370.281095 L426.666667,370.986667 L426.666667,392.32 C426.666667,415.884149 383.686003,434.986667 330.666667,434.986667 C278.177524,434.986667 235.527284,416.264289 234.679528,393.025571 L234.666667,392.32 L234.666667,370.986667 L234.679528,370.281095 C234.719905,369.174279 234.855108,368.077708 235.081684,366.992917 C240.961696,371.41162 248.119437,375.487081 256.413327,378.976167 C275.772109,387.120048 301.875889,392.32 330.666667,392.32 C360.599038,392.32 387.623237,386.691188 407.213205,377.984536 C414.535528,374.73017 420.909655,371.002541 426.247658,366.986259 Z M192,7.10542736e-15 L384,106.666667 L384.001134,185.388691 C368.274441,181.351277 350.081492,178.986667 330.666667,178.986667 C301.427978,178.986667 274.9627,184.361969 255.43909,193.039129 C228.705759,204.92061 215.096345,223.091357 213.375754,241.480019 L213.327253,242.037312 L213.449,414.75 L192,426.666667 L-2.13162821e-14,320 L-2.13162821e-14,106.666667 L192,7.10542736e-15 Z M426.247658,302.986259 C426.477599,304.072636 426.613335,305.17172 426.653805,306.281095 L426.666667,306.986667 L426.666667,328.32 C426.666667,351.884149 383.686003,370.986667 330.666667,370.986667 C278.177524,370.986667 235.527284,352.264289 234.679528,329.025571 L234.666667,328.32 L234.666667,306.986667 L234.679528,306.281095 C234.719905,305.174279 234.855108,304.077708 235.081684,302.992917 C240.961696,307.41162 248.119437,311.487081 256.413327,314.976167 C275.772109,323.120048 301.875889,328.32 330.666667,328.32 C360.599038,328.32 387.623237,322.691188 407.213205,313.984536 C414.535528,310.73017 420.909655,307.002541 426.247658,302.986259 Z M127.999,199.108 L128,343.706 L170.666667,367.410315 L170.666667,222.811016 L127.999,199.108 Z M42.6666667,151.701991 L42.6666667,296.296296 L85.333,320.001 L85.333,175.405 L42.6666667,151.701991 Z M330.666667,200.32 C383.155809,200.32 425.80605,219.042377 426.653805,242.281095 L426.666667,242.986667 L426.666667,264.32 C426.666667,287.884149 383.686003,306.986667 330.666667,306.986667 C278.177524,306.986667 235.527284,288.264289 234.679528,265.025571 L234.666667,264.32 L234.666667,242.986667 L234.808715,240.645666 C237.543198,218.170241 279.414642,200.32 330.666667,200.32 Z M275.991,94.069 L150.412,164.155 L192,187.259259 L317.866667,117.333333 L275.991,94.069 Z M192,47.4074074 L66.1333333,117.333333 L107.795,140.479 L233.373,70.393 L192,47.4074074 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">{totalProduct?.totalItems}</h4>
        <div className="text-gray-500">Total Products</div>
      </div>
    </div>
  </div>

  <div className="w-1/4">
    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
      <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
        <svg className="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">{totalSell?.totalSell}</h4>
        <div className="text-gray-500">Total Sold</div>
      </div>
    </div>
  </div>

  <div className="w-1/4">
    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
      <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
        <svg className="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
        </svg>
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">RS. {totalSellAmount?.totalSellAmount}</h4>
        <div className="text-gray-500">Total Sales Amount</div>
      </div>
    </div>
  </div>

</div>

{/* 2nd Row */}
<div className="flex flex-wrap justify-evenly  p-6 w-full">
  <div className="w-1/4">
    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
      <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
        <svg className="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">{todaySell?.totalSell}</h4>
        <div className="text-gray-500">Today's Sales</div>
      </div>
    </div>
  </div>

  <div className="w-1/4">
    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
      <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
        <svg className="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">RS. {todaySellAmount? todaySellAmount?.todaySellAmount : 0}</h4>
        <div className="text-gray-500">Today's Sales Amount</div>
      </div>
    </div>
  </div>


</div>
<p className='text-2xl mt-4 font-bold'>Top Sales</p>
  {/* Products Grid */}
  <div className="grid mt-2 grid-cols-4 gap-6">
                {topSellProduct && topSellProduct.length > 0 ? (
                    topSellProduct.map((product, index) => (
                        <div
                            key={index}
                            className="group my-6 p-2 h-80 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-lg"
                        >
                            <div className="relative h-60 w-full">
                                <img
                                    className="h-full w-full object-cover"
                                    src={product?.productImageUrl}
                                    alt={product?.name}
                                />
                            </div>

                            <div className="mt-4 px-5 pb-5">
                                <h5 className="text-xl tracking-tight text-slate-900">{product?.name}</h5>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-sm text-slate-900">NRP. {product?.price}</span>
                                    </p>
                                    <p>
                                        <span className="text-sm text-slate-900">Stock. {product?.stockQuantity}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-4 text-gray-500">No products found</p>
                )}
            </div>


</div>
  </div>
  </>
  )
}

export default Dashboard


