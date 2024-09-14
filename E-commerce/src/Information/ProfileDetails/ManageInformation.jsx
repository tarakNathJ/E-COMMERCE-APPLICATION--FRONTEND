import React from 'react'

function ManageInformation() {
    return (
        <div className='w-full h-full ml-8 text-left '>
            <div className=' my-12 '>
                <h1 className=' text-2xl font-bold '>Manage Address</h1>
                <form action="">
                   <div className='flex   items-center gap-4'>
                   <input type="text" name='' placeholder='+ Add New Address' className='w-[350px] h-12 mt-8 ml-12 rounded-md text-2xl  ' />
                    <button type="submit" className='h-12 w-32 bg-blue-500 rounded-md mt-8'>Save</button>
                   </div>
                </form>

            </div>
            <div className='w-[500px]  h-32  bg-white mb-28 '>
            VILL : soyadighi , PO : gobindapur ,TS : tamluk , DIST : purba  medinipur, 

            pin : 721627,
            </div>
        </div>
    )
}

export default ManageInformation