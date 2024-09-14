import React from 'react'

function Personal_Information() {

    return (
        <div className=' text-left pl-8   font-semibold '>
            <form >
                <div>
                    <h1 className=' text-2xl font-bold '>Personal information</h1>
                    <div className='flex gap-16 pt-8 '>
                        <input type="text" name='FirstName' placeholder='FirstName' className=' w-[250px] h-[40px]  text-xl text-center rounded-md' />
                        <input type="text" name='LastName' placeholder='LastName' className=' w-[250px] h-[40px]  text-xl text-center rounded-md' />
                    </div>
                </div>

                <div className=' mt-8 '>
                    <h1 className=' text-xl ml-8 '>Your Gender</h1>
                    <div className='flex gap-8 text-xl ml-20 mt-4'>
                        <input type="radio" name="Gender" id="Male" />
                        <label >Male</label>
                        <input type="radio" name="Gender" id="Female" />
                        <label >Female</label>
                    </div>
                </div>
                <div className='mt-8 '>
                    <h1 className=' text-2xl font-bold '>Email Address</h1>
                    <input type="text" name='Email' placeholder='Email'  className=' w-[250px] h-[40px] mt-8  text-xl text-center rounded-md'  />
                </div>
                <div className='mt-8 '>
                    <h1 className=' text-2xl font-bold '>Mobile number</h1>
                    <input type="text" name='Mobile_number' placeholder='Mobile number' className=' w-[250px] h-[40px] mt-8  text-xl text-center rounded-md' />
                </div>
                <hr className=' border  border-gray-500 mt-4   ' />

                <button type="submit" className=' w-[250px] h-12 mt-8  border rounded-lg  border-black bg-yellow-400 text-2xl '>Save Information</button>

            </form>
        </div>
    )
}

export default Personal_Information