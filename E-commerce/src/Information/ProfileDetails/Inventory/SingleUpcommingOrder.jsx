import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function SingleUpcommingOrder({Data,Transfer}) {
    const datas = useSelector((store) => store.Profile);
    const [Error ,SetError] = useState(null);
    const [Status , setStatus] = useState(null);
    const [Responce , SetResponce]=  useState(null);



    const stockTranceFerController = async ()=>{
        const Controller = new AbortController();
        try{
            setStatus(false);
            const Responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/inventoryManager/StockUpdate`,{
                Po_LineID:Data._id,
                LOC:13253,
                CC:92385,
                TransferQTY:Data.OrderQTY
                
            },{
                headers:{
                    'Content-Type': 'application/json',
                    Authorisation: `Bearer ${datas.data.token}`,
                }
            },{
                signal: Controller.signal
            })

             SetResponce(Responce);
             setStatus(true);

        }catch(error){
            setStatus(false);
            if(axios.isCancel(error)){
                console.log(error);
                return 
            }

            if (axios.isAxiosError(error)) {
                console.log('request canceled', error.message)
                return
            }
        }


        // clean up 
        return ()=>{
            Controller.abort()
        }

    }
    
    return (
        <div className='h-24 w-[85%] bg-slate-100 rounded-sm flex justify-between gap-4 '>

            <div className='w-[20%] h-full   rounded-sm overflow-hidden'>
            <img src={Data.Variant_ID.ItmeImage}  className=' h-full w-full  object-contain' alt=""  />
            </div>
            <section className='w-[80%] h-full  flex justify-between '>
                <div className=' ml-16 text-3xl font-sans flex gap-2 font-semibold text-gray-900   flex-col items-center'>
                    <h1>{Data.ItmeName}</h1>
                    <h2 className='text-2xl text-left '>Price : <span className='text-green-700'>{Data.Variant_ID.PurchasePrice }</span> </h2>
                </div>
                <div className='flex  items-center gap-10 mr-2 ' >
                    <div className='flex gap-2  flex-col'>
                        <button onClick={stockTranceFerController} className='w-36 h-8 bg-amber-600 rounded-sm  duration-300 hover:bg-amber-500 scroll-smooth'>Delivery</button>
                        <button className='w-36 h-8 bg-amber-600 rounded-sm duration-300 hover:bg-amber-500 scroll-smooth'>Order Detalis</button>
                  
                    </div>
                    <div>
                        <button className='h-16 w-16 bg-red-600 rounded-full duration-300 hover:bg-red-700 hover:shadow-white' >Cancel</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleUpcommingOrder