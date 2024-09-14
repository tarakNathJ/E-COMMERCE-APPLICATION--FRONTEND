import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProduct } from '../Redux/StoreSingleItme';


function Card3({ data }) {

  const dispatch = useDispatch();
  const navigate = useNavigate()



  const OnclickHandeler = (data) => {
    dispatch(setProduct(data));
    navigate("/ProductBuy");

  }





  return (
    <div onClick={()=>OnclickHandeler(data)} className=' w-[200px] h-[290px] bg-slate-400  '>
      <div className='  h-[80%]  w-full bg-white'>
        <img src={data.ItmeImage} alt="" className='w-full h-[80%] object-cover leading-loose' />
      </div>
      <div className='  h-[20%]  w-full bg-slate-100 '>
        <h1 className='text-xl font-semibold italic text-gray-500'>{data.ItmeName}</h1>
      </div>

    </div>
  )
}

export default Card3
