import React from 'react'
import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/StoreSingleItme';
import { useNavigate } from 'react-router-dom';


function SingleProduct(props) {
  const dispatch = useDispatch();
  const navigate  = useNavigate();



  const singleItme = props.data;



  const OnclickHandler = (singleItme)=>{
        dispatch(setProduct(singleItme));
        navigate("/ProductBuy");
       
  }

 
  
  return (
    <div onClick={()=>OnclickHandler(singleItme)} className=' h-[258px]  w-[183px]  bg-green-100  border-b-2 rounded-lg cursor-pointer shadow-md shadow-sky-200'>
      <div className='w-full h-[70%]  bg-white overflow-hidden   rounded-t-md  '><img className=' overflow-hidden w-full  h-[69%]   object-contain leading-loose' src={singleItme.ItmeImage} alt="" /> </div>
      <div className='w-full h-[20%] bg-white   '>{singleItme.ItmeName}</div>
      <div className='w-full h-[10%] bg-slate-100  rounded-b-md flex  gap-1 justify-evenly '>
        <div className = '  text-yellow-500' >{` $:${singleItme.PurchasePrice}`}</div>
        <div className = '  text-green-700 ' >{`size : ${singleItme.Size}`}</div>
      </div> 
    </div>
  )
}

export default SingleProduct