import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

function UpdateProfile() {

  const datas = useSelector((store) => store.Profile);
    const OnclickHandeler = async()=>{
      const Controller = new AbortController()
       try{
        const responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/UpdateSuperUser`,{},{
          headers:{
            "Content-Type":"application/json",
            Authorisation: `Bearer ${datas.data.token}`,
          }

        },{
          signal:Controller.signal
        })
        alert("update Success fully");
       }catch(error){
        if(axios.isCancel(error)){
          return
        }
        if(axios.isAxiosError(error)){
          return
        }
       }
    }
    

  return (
    <div className='flex flex-col mt-8 text-left '>

        <h1 className=' mt-1 text-2xl font-medium text-gray-500 ' >Update Your Profile</h1>
        <button onClick={OnclickHandeler} className='mt-16 border rounded-md text-xl text-white   font-medium bg-blue-600 w-[180px] h-10  hover:bg-blue-900 ease-linear '> Update </button>
    </div>
  )
}

export default UpdateProfile