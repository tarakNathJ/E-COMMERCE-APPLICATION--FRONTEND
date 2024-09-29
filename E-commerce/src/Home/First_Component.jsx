import { useEffect, useState } from 'react';
import React from 'react'
import Itme from './Itme';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import {SetUOM_data, RemoveUomData} from '../Redux/UserSelectData';



function First_Component({Data}) {
  const navigate =  useNavigate();
  const dispatch = useDispatch();
  const temp = Data;
  
  Data = Data.slice(0, 4);
  
  const SeemoreHandler = async (Item)=>{
     
      dispatch(SetUOM_data(Item[0].UOM));
    navigate("/ShowProductVarient");

  }
    
    return (
        <div className='w-[300px]  h-[450px]  my-[12px] bg-bg-Cart  '>
          <div className='w-[300px] h-[50px] bg-slate-500 items-center  font-bold  text-[20px] '>
                <h3 className=' pt-2 '>Up to 60% off | Styles for men</h3>
          </div>
          <div className='flex flex-wrap justify-evenly gap-0'>
            {
              Data.map((data) => {
                return (
                  <Itme key={data._id} data={data} />
                );
              })
            }
          </div>
          <div className='w-[300px] h-[30px] mt-1 bg-slate-500  text-right '>
            <p className=' pr-3 cursor-pointer ' onClick={()=>SeemoreHandler(temp)} >see more</p>
          </div>
    
        </div>
      )
}
  
export default First_Component;