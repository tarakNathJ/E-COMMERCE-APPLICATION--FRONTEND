import React from 'react'

function ManageUPI() {
  return (
    <div className='h-full w-[70%] text-left  font-medium my-8 text-2xl mx-8 '>
        

        <form action="" >
        <h2>Manage UPI </h2>
        <div className='flex gap-12 my-8 flex-col '>
        <input type="text" placeholder='phonePAY' className='h-16  pl-4 bg-priceBer  w-[300px]' />
        </div>

        <p className=' text-[18px]'>
           <span className=' text-2xl'> FAQs</span> <br />

Why is my UPI being saved on Flipkart?
It's quicker. You can save the hassle of typing in the complete UPI information 
every time you shop at Flipkart by saving your UPI details. You can make your
 payment by selecting the saved UPI ID of your choice at checkout. While this is
 obviously faster, it is also very secure.
Is it safe to save my UPI on Flipkart?
Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are
 non PCI compliant and are non confidential data.
What all UPI information does Flipkart store?
Flipkart only stores UPI ID and payment provider details. We do not store UPI 
PIN/MPIN.
Can I delete my saved UPI?
Yes, you can delete your UPI ID at any given time.

View all FAQs
        </p>
       </form>



    </div>
  )
}

export default ManageUPI