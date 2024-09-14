import React from 'react'


function InventoryDetailes({OnClickHandeler}) {
    const SelectOption =async(data)=>{
     
        await OnClickHandeler(data);
    }


    return (
        <div>
            <div className=' flex gap-2  items-center '>
                <div className=' h-4 w-4 bg-black rounded-full '></div>
                <h3 className=' text-2xl font-medium m-1 '>Inventory</h3>
            </div>

            <ul className='flex flex-col gap-1 ml-16 text-[18px] '>
                <li onClick={() => SelectOption('UpcomingOrder')} className=' cursor-pointer hover:underline'>Upcoming Order</li>
                <li onClick={() => SelectOption('Upcomingstock')} className=' cursor-pointer hover:underline'>Upcoming stock</li>
                <li className='cursor-pointer hover:underline'>My notification</li>
   
            </ul>
        </div>
    )
}

export default InventoryDetailes