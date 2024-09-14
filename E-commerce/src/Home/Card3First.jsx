import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProduct } from '../Redux/StoreSingleItme';

function Card3First({ ThirdSetArray }) {

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const first = ThirdSetArray[0];
  const Second = ThirdSetArray[1];
  const Third = ThirdSetArray[2];


  const OnclickHandeler = (data) => {
    dispatch(setProduct(data));
    navigate("/ProductBuy");

  }

  return (
    <div className=' bg-slate-100 w-[35%]  h-full  flex flex-col'>
      <div className=' w-full h-[10%]  bg-gray-700'>

      </div>
      <div className=' w-full h-[90%]  flex flex-row justify-center flex-wrap  '>
        <div onClick={() => OnclickHandeler(Second)} className=' w-[50%]   flex flex-col justify-center  '>
          <img src={Second.ItmeImage} className='w-full h-[90%] object-cover leading-loose' />
          <h1 className='text-xl font-semibold italic text-center text-gray-500'>{Second.ItmeName}</h1>
        </div>
        <div className=' flex flex-col w-1/2 h-full border-l-2  '>
          <div onClick={() => OnclickHandeler(Third)} className='w-full   h-1/2' >
            <img src={Third.ItmeImage} className='w-full h-[80%] object-cover leading-loose' />
            <h1 className='text-xl font-semibold italic text-center text-gray-500'>{Third.ItmeName} </h1>
          </div>
          <div onClick={() => OnclickHandeler(first)} className='w-full h-1/2 border-t-2'>
            <img src={first.ItmeImage} className='w-full h-[80%] object-cover leading-loose' alt="" />
            <h1 className='text-xl font-semibold italic text-center text-gray-500'>{first.ItmeName}</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card3First