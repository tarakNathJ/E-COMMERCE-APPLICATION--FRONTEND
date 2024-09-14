import React from 'react'


function CreateSupplierAcount({OnClickHandeler}) {
    return (
        <div>
            <div className=' flex gap-2  items-center '>
                <div className=' h-4 w-4 bg-black rounded-full '></div>
                <h3 className=' text-2xl font-medium m-1 '>ADMIN </h3>
            </div>

            <ul className='flex flex-col gap-1 ml-16 text-[18px] '>
                <li onClick={()=>OnClickHandeler('ProvideSupplierRole')} className=' cursor-pointer hover:underline'>Provide  Role</li>
                <li  onClick={()=>OnClickHandeler('UpdateProfile')} className=' cursor-pointer hover:underline'>Update Profile </li>
                <li onClick={()=>OnClickHandeler('HomePageData')} className='cursor-pointer hover:underline'>Home page Product</li>
                <li className=' cursor-pointer hover:underline'>My Review & Ratings</li>
            </ul>
        </div>
    )
}

export default CreateSupplierAcount