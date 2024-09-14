import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setProduct}  from '../../Redux/StoreSingleItme';


function ChildCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // SingleProduct key={data._id} data={data} 

  const OnClickToRedirctSinglePageData=(ItemDetailes)=>{
    console.log(ItemDetailes);
    dispatch(setProduct(ItemDetailes));
    navigate("/ProductBuy");
   
  }
  return (
    <div onClick={()=>OnClickToRedirctSinglePageData(data)} className=' w-[250px]  bg-white h-[330px] flex flex-col items-center rounded-md'>
      <div className='h-[70%] bg-transparent rounded-t-md '>
        <img src={data.ItmeImage} alt="" className=' h-full w-full object-contain overflow-hidden  leading-loose' />
      </div>
      <div className=' h-[12%] bg-transparent mt-4'> {data.ItmeName}</div>
      <div className=' h-[11%] w-[90%]  bg-yellow-100 rounded-b-md flex gap-2 flex-wrap items-center justify-evenly'>
        <div className='flex items-center text-green-700 ' ><FaRupeeSign /> {data.PurchasePrice}</div>
        <div className=''>SIZE :{data.Size} </div>
      </div>
    </div>
  )
}

export default ChildCard
