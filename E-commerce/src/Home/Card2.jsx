import React from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../Redux/StoreSingleItme';
import { useNavigate } from 'react-router-dom';

function Card2({data}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  


  const OnclickHandeler = (data)=>{
    dispatch(setProduct(data));
    navigate("/ProductBuy");

  }
 
  return (
    <div onClick={()=>OnclickHandeler(data)} className=' w-[195px]  h-[250px] mt-1  bg-white overflow-x-hidden cursor-pointer '>
          <div className=' w-full h-[80%] '><img src={data.ItmeImage} className='w-full h-[89%]  object-contain overflow-hidden leading-loose' alt="" /></div>
          <div className=' w-full h-[20%] '>{data.ItmeName}</div>
    </div>
  )
}

export default Card2
