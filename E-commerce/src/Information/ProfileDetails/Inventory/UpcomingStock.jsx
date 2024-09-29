import { useEffect, useState } from 'react'
import React from 'react'
import Single_Upcoming_Stock from './Single_Upcoming_Stock'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SetUpcomingItem, RemoveUpcommingStock } from '../../../Redux/UpcomingStockHandeler';
import { useDispatch } from 'react-redux';




function UpcomingStock() {
  const Dispatch = useDispatch();

  const datas = useSelector((store) => store.Profile);
  const DataForStock = useSelector((store) => store.UpcomingStocK.Data);
  const [Lodding, setLodding] = useState(false);
  const [errors, setErrors] = useState(false);

  if (errors) {
    return <h1>404 server side error </h1>
  }

  if (Lodding) {
    return <h1> server loding.....</h1>
  }

  const ShowAllProductHandler = async () => {
    try {
      setLodding(true);
      setErrors(false);
      const controller = new AbortController();

      const responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/inventoryManager/ShowUpcommingStock`, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${datas.data.token}`,
        }
      }, {
        signal: controller.signal
      })
      setLodding(false);
      Dispatch(SetUpcomingItem(responce.data.FindSupplierAccount.UpcomminOrderToState));

    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('request canceled', error.message)
        return
      }

      if (axios.isAxiosError(error)) {
        console.log('request canceled', error.message)
        return
      }
      setErrors(true);
      setLodding(false)

    }

    // cleaup
    return () => {
      controller.abort()
    }

  }

  return (
    <div className='bg-while h-full w-full'>

      <div className='flex justify-between px-4 mt-4'>
        <h1 className='text-3xl text-left font-bold text-slate-600  italic'>Upcoming Stock</h1>
        <button onClick={ShowAllProductHandler} className=' w-40 h-10 bg-blue-500 rounded-md text-xl font-semibold '>Show All Order</button>
      </div>
      <hr className='border-2 border-slate-700 w-full mt-8' />

      <div className='mt-8 flex gap-4 flex-col flex-wrap'>{
        DataForStock.map((item) => <Single_Upcoming_Stock key={item._id} item={item} />)

      }
      </div>
    </div>
  )
}

export default UpcomingStock



