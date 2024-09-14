import React, { useEffect, useState } from 'react'

import ParentCard from './selectByprodut/ParentCard';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {BaseApi} from '../DataBase'


function SelectByProduct() {

  const UomData = useSelector((state) => state.UserSelectedData);
 
  const [Loding, SetLoding] = useState(true);
  const [Error, setErrors] = useState(false);
  const [Responce, setResponce] = useState(null);

  useEffect(() => {
    
    ApiCallForUomData();
  }, [UomData]);



  const ApiCallForUomData = async () => {
    const controller = new AbortController();
    try {
      SetLoding(true);
      setErrors(false);
      const Responce = await axios.post(`/Base/api/v1/productManager/ShowAllItmeUsing_UOM_ID`, {
        UOM: UomData.UomData
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }, {
        signal: controller.signal
      })

      SetLoding(false);
      setResponce(Responce.data.findVarient);
     



    } catch (error) {
      setErrors(true);
   
      if (axios.isCancel(error)) {
        return
      }
      if (axios.isAxiosError(error)) {
        return
      }

    }

  }



  if (Error) {
    return <h1>404 server side error </h1>
  }

  if (Loding) {
    return  <div className=' w-full h-8 justify-center items-center'>
    <div className=' flex justify-center items-center h-20 w-20 bg-slate-300 rounded-full   animate-bounce '>

        {/* <div className='h-20 w-20 justify-center items-center bg-slate-300 rounded-full  border-4 border-t-red-500 animate-spin' ></div> */}
        <hr className=' border-red-600 border-2 w-16 animate-spin ' />
    </div>
    <hr className='  border-red-600 border-2 w-40 ' />
</div>
  }



  return (
    <div className=' w-full h-full overflow-x-hidden flex flex-col justify-center gap-8 '>
      {/* top part */}
      {/* <div className='flex justify-center bg-slate-400 w-full rounded-2xl overflow-hidden  ' >
            <img src={Heroimg} alt="" className=' h-[500px] w-full ' />
        </div> */}
      {/* Banner */}
      <div className='mt-4 w-full h-32 bg-Botton  rounded-2xl flex justify-center items-center  rotate-1 '>
        <div className='w-[99%] h-32  bg-gradient-to-r from-linerLift flex justify-center to-linear-right rounded-2xl -rotate-1' >
          <h1 className=' font-semibold items-center  pt-6 text-6xl '>SHOP BY BRAND</h1>
        </div>
      </div>

      {/* product part in your data */}
      <div className=' flex flex-col h-[95%]  gap-0  bg-priceBer '>
        {

          <ParentCard Responce={Responce} />

        }
      </div>
    </div>
  )
}

export default SelectByProduct