import React from 'react'

function PAN_CardInfo() {
  return (
    <div className='h-full w-[70%] text-left  font-medium my-8 text-2xl mx-8 '>
      
      <form action="" >
        <h2>PAN CARD INFORMATION</h2>
        <div className='flex gap-12 my-8 flex-col '>
        <input type="text" placeholder='PAN CARD NUMBER' className='h-12 rounded-md    w-[300px]' />
        <input type="text" placeholder='FULL NAME' className='h-12 rounded-md    w-[300px]'/>

        <div className=' h-18 rounded-md    w-[320px] bg-slate-100 text-[20px]  '>
          <h2 className=' text-gray-400 '>Upload  PAN  Card  (only jpg only) </h2>
          <input type="file" name="" id=""  className=' h-12 '/>
        </div>
        </div>
        <div className=' flex justify-center gap-4 '>
          <input type="checkbox" name="" id="" className='-mt-20' />
        <p className=' text-[17px]  '>I do hereby declare that PAN furnished/stated above is correct and belongs to me,
         registered as an account holder with www.flipkart.com. I further declare that I shall solely
         be held responsible forthe consequences, in case of any false PAN declaration.</p>
        </div>
        
        <button type="submit" className=' text-xl h-10 w-[130px] bg-blue-500 mt-4 rounded-md  hover:underline '>UPLOAD</button>
      </form>

      <h1 className=' text-blue-600 mt-24 '>Read Terms & Conditions of PAN Card Information</h1>

    </div>
  )
}

export default PAN_CardInfo