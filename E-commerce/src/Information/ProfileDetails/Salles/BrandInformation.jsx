import React from 'react'

function BrandInformation({OnClickHandeler}) {
    return (
        <div>

            <div className=' flex gap-2  items-center '>
                <div className=' h-4 w-4 bg-black rounded-full '></div>
                <h3 className=' text-2xl font-medium m-1 '>Brand Infornation</h3>
            </div>

            <ul className='flex flex-col gap-1 ml-16 text-[18px] '>
                <li onClick={()=>OnClickHandeler("BrandCreation")} className=' cursor-pointer hover:underline'>Brand Creation</li>
                <li onClick={()=>OnClickHandeler("ProductSell")} className=' cursor-pointer hover:underline'>Sell Product</li>
                <li className=' cursor-pointer hover:underline'>Brand Detailes</li>
                <li className=' cursor-pointer hover:underline'>Product Detailes</li>
            </ul>
        </div>
    )
}

export default BrandInformation