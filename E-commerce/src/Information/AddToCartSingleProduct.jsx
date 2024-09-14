import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'

function AddToCartSingleProduct({data}) {
 
  return (
    <div className='flex gap-4 items-center justify-between text-left h-32 bg-slate-100 w-[60%] px-2 rounded-md' >
      <img src={data.ItmeImage} className='h-full w-[40%]  object-contain overflow-hidden' alt="" />
      <div className='text-3xl font-semibold '>
      <h1 >Name : {data.ItmeName}</h1>
      <h1 className=' text-gray-600'>Size : {data.Size}</h1>
      </div>
      <div className='text-3xl font-semibold  flex gap-1 items-center text-green-700'>
        <FaRupeeSign/> 
        {data.PurchasePrice}
      </div>

    </div>
  )
}

export default AddToCartSingleProduct