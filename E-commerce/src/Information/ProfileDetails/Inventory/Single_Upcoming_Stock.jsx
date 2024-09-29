import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';



function Single_Upcoming_Stock({item}) {
    const datas = useSelector((store) => store.Profile);
        const [error,SetError] = useState(null);
        const [Status,SetStatus] = useState(null);

        console.log(item);

    const AcceptOrder = async()=>{
        const controller = new AbortController();
        try{
            SetStatus(false);
            const Responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/inventoryManager/ExceptUpcommingStock`,{
                StockStransferId:item._id,
                LOC:1324.354,
                CC:12.324
            },{
                headers: {
                    'Content-Type': 'application/json',
                    Authorisation: `Bearer ${datas.data.token}`,
                }
            },{
                signal: controller.signal
            })
            SetStatus(true)
            console.log(Responce);
        }catch(error){
            SetError(error)
            SetStatus(false);
            if(axios.isCancel(error)){
                console.log("Single_Upcoming_Stock :-",error )
                return 
            }
            if(axios.isAxiosError(error)){
                console.log("Single_Upcoming_Stock :-",error )
                return 
            }
        }
    }

    

  return (
    <div className='h-24 w-[85%] bg-slate-300 rounded-sm flex justify-between gap-4 '>

    <div className='w-[20%] h-full  bg-slate-500 rounded-sm'></div>
    <section className='w-[80%] h-full  flex justify-between '>
        <div className=' ml-16 text-3xl font-sans flex gap-2 font-semibold text-gray-900   flex-col items-center'>
            <h1>Custromer Name</h1>
            <h2 className='text-2xl text-left '>Price : <span className='text-green-700'>34</span> </h2>
        </div>
        <div className='flex  items-center gap-10 mr-2 ' >
            <div className='flex gap-2  flex-col'>
                <button onClick={AcceptOrder} className='w-36 h-8 bg-amber-600 rounded-sm hover:bg-amber-500 scroll-smooth'>Accept Order</button>
                <button className='w-36 h-8 bg-red-700 rounded-sm hover:bg-red-800 scroll-smooth'>Reject Order</button>
          
            </div>
            <div>
                <button className='h-16 w-16 bg-yellow-500 rounded-full hover:bg-yellow-600' > Details</button>
            </div>
        </div>
    </section>
</div>
  )
}

export default Single_Upcoming_Stock