import React from 'react'

function Fotter() {
  return (
    <div className='  h-[90%]  w-[100%] bg-NaveberBackColor '>
      <div className='w-full h-[64%] text-white flex justify-evenly items-center '>

        <div className=' flex flex-col gap-2 text-[15px] text-left '>
          <h1 className='text-2xl font-semibold'>Programs</h1>
          <h1 >Corporate</h1>
          <h1>One To One</h1>
          <h1>Consulting</h1>

        </div>
        <div className=' flex flex-col gap-2 text-[15px] text-left '>
          <h1 className='text-2xl font-semibold'>Contact</h1>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Profile</h1>
        </div>
        <div className=' flex flex-col gap-2 text-[15px] text-left '>
          <h1 className='text-2xl font-semibold'>Service</h1>
          <h1  >Traning</h1>
          <h1>coaching</h1>
          <h1>consulting</h1>
        </div>
        <div className=' flex flex-col gap-2 text-[15px] text-left '>
          <h1 className='text-2xl font-semibold'>Newsletter</h1>
          <div className='flex gap-2'>
            <input type="text" className='w-[350px] h-9 rounded-tl-md outline-none text-blue-900 rounded-bl-md' />
            <button className='w-20 h-9 bg-red-500 rounded-tr-md rounded-br-md '>subscribe</button>
          </div>
          <div className=' flex gap-2 items-center '>
            <span>
              <img src={`https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png`} className='h-8 w-8 object-contain ' alt="" />
            </span>
            <span>
              <img src={`https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user`} className='h-8 w-8 object-contain '  alt="" />
            </span>
            <span>
              <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png`} className='h-8 w-8 object-contain '  alt="" />
            </span>
            <span>
              <img src={`https://as2.ftcdn.net/v2/jpg/03/16/74/65/1000_F_316746510_yotsjNGcv7fzmrmTkApIinQaR0TfpBzd.jpg`} className='h-8 w-8 object-contain '  alt="" />

            </span>
            
          </div>
          <div>
         
              <h3> Email : janatark739@gmail.com</h3>
            </div>
            
        </div>
      </div>
      <hr className=' border-white border-[1px] w-[80%] ml-auto mr-auto ' />
      <div className='w-full h-[34%] text-white flex '>
       
        <span className=' mt-16 font-semibold  font-serif text-sky-500 ml-[-35px] text-4xl'>ARAK NATH </span>
      </div>
    </div>
  )
}

export default Fotter