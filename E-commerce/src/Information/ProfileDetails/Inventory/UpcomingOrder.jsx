import React, { useEffect, useState } from 'react'
import SingleUpcommingOrder from './SingleUpcommingOrder'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetStockTransfer, SetPurchaseOrderLine, RemoveDataHendeler } from '../../../Redux/UpcommingOrder';


function UpcomingOrder() {
  const Dispatch = useDispatch();

  const datas = useSelector((store) => store.Profile);
  const POline = useSelector((state) => state.UpcommingOrder.PurchaseOrderLine)
  const Transfer = useSelector((state) => state.UpcommingOrder.StockTransfer)
  const [Lodding, setLodding] = useState(false);
  const [errors, setErrors] = useState(false);

  const ShowAllProductHandler = async () => {
    try {
      setLodding(true);
      setErrors(false);
      const controller = new AbortController();
      const responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/inventoryManager/ShowAllOrder`, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${datas.data.token}`,
        }
      }, {
        signal: controller.signal
      })
      setLodding(false);
      Dispatch(SetStockTransfer(responce.data.findSupplier.StockTransfer));
      Dispatch(SetPurchaseOrderLine(responce.data.findSupplier.PO_Lines));


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

  if (errors) {
    return <h1>404 server side error </h1>
  }

  if (Lodding) {
    return <h1> server loding.....</h1>
  }

  return (
    <div className='bg-while h-full w-full'>
      <div className='flex justify-between px-4 mt-4'>
        <h1 className='text-3xl text-left font-bold text-slate-600  italic'>Upcoming Order</h1>
        <button onClick={ShowAllProductHandler} className=' w-40 h-10 bg-blue-500 rounded-md text-xl font-semibold '>Show All Order</button>
      </div>
      <hr className='border-2 border-slate-700 w-full mt-8' />

      <div className='mt-8 flex gap-4 flex-col'>
        {
          POline.map((Data, index) => <SingleUpcommingOrder Data={Data} Transfer={Transfer[index]} key={Data._id} />)
        }

      </div>
    </div>
  )
}

export default UpcomingOrder