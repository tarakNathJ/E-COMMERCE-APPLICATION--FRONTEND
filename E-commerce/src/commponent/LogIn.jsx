import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { UserProfileData, removeUserprofileData } from '../Redux/UserData';
import axios from 'axios';
import { toast } from 'react-toastify';
import {BaseApi} from '../DataBase'



import Cookies from 'universal-cookie';
import { data } from 'autoprefixer';


function LogIn() {
  const datas = useSelector((store) => store.Profile)
  const Cookis =new Cookies();
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [FullFillError, setFullFill] = useState({});
  const [Error, SetError] = useState(false);
  const [Status, SetStatus] = useState(null);


  useEffect(()=>{
    const Coock = Cookis.get("token")
    if(!Coock){
      Dispatch(removeUserprofileData());
      
    }
    else{
      Navigate('/');
    }


  },[])
  // declear state to from data store
  const [FromData, SetFromData] = useState({
    email: "",
    password: ""
  })

  // to store login from data
  const OnchangeHandeler = (event) => {
    const { name, value } = event.target
    SetFromData({
      ...FromData, [name]: value
    })

  }


  // to chack data are full fill or not  then API call request 
  const OnsubmitHandeler = async (event) => {
    event.preventDefault();
    const Validation = {}
    if (!FromData.email.trim()) {
      Validation.email = "enter your email";
    }
    if (!FromData.password.trim()) {
      Validation.password = "enter your Password";
    }
    setFullFill(Validation);
    if (Object.keys(Validation).length === 0) {
      await APIcall();
     
      
    }
  }

  const APIcall = async () => {
    const controller = new AbortController();

    try {
      SetStatus(false);
    
      const Responce = await axios.post(`/Base/api/v1/user/login`, {
        Email: FromData.email,
        password: FromData.password
        
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }, {
        signal: controller.signal
      })
      SetStatus(true);
    
      Dispatch( UserProfileData(Responce.data));

      sessionStorage.setItem("ActioneType",Responce.data.user.ActioneType);
      
      Cookis.set("token",Responce.data.token); 

      Navigate('/');
      toast.success("You are login success fully");

     
    } catch (Error) {
      SetStatus(false)
      toast.error("Enter right PassWord");
      if (axios.isCancel(Error)) {
        console.log('request canceled', Error.message);
        return
      }
      
    }
  }
 

  

 
  return (
    <div className=' h-[600px] w-full overflow-x-hidden  bg-slate-100 flex justify-center pt-8 cursor-pointer shadow-inherit '>
      <div className='h-[400px] w-[300px] bg-white/90 rounded-tl-3xl rounded-bl-3xl '>
        <h2 className='  text-2xl text-center mt-2 italic font-bold'>LOG IN </h2>
        <div className=' mt-16'>
          <form onSubmit={OnsubmitHandeler} action="">
            <div className=' flex justify-between items-center px-6 '>
              <div className=' flex flex-col  gap-10 '>
                <div className=' text-left flex flex-col  relative'>
                  
                  <input type="text" required onChange={OnchangeHandeler} name='email' autoComplete='off' autoCorrect='on'   className=' w-[220px] h-8 text-gray-600   border-2 border-b-blue-500 border-x-transparent border-t-transparent   text-xl  text-right  focus:outline-none peer bg-inherit ' />
                  <span className='text-xl absolute font-medium pl-2 peer-focus:-translate-y-6 duration-200 peer-valid:-translate-y-6 '>Email</span >
                  {FullFillError.email && <span className='text-red-500 '>{FullFillError.email}</span>}
                </div>
                <div className='-mt-4 text-left flex flex-col gap-2'>
                 
                  <input required type="password" onChange={OnchangeHandeler} name='password' autoComplete='off' autoCorrect='off' className=' w-[220px] h-8 text-gray-600   border-2 border-b-blue-500 border-x-transparent border-t-transparent   text-xl text-right  focus:outline-none peer ' />
                  <span className='text-xl absolute font-medium pl-2 peer-focus:-translate-y-6 duration-200 peer-valid:-translate-y-6  '>Password</span>
                  {FullFillError.password && <span className='text-red-500 '>{FullFillError.password}</span>}
                </div>
              </div>
            </div>

            <div className='mt-8 flex flex-col justify-center items-center'>
              <button type="submit" className=' w-[100px] h-10 rounded-lg  font-medium  text-xl bg-yellow-400/70'>Log In</button>
              <Link to={'/SignUp'} className=' text-blue-600  underline font-semibold mt-2'> Sign Up </Link>
            </div>

          </form>
        </div>
      </div>
      <div className=' h-[400px] w-[300px]  bg-blue-100  rounded-br-3xl '>
        <img src='https://img.pikbest.com/origin/09/23/71/42xpIkbEsTXer.png!sw800' className=' overflow-hidden' alt="" />
      </div>
    </div>
  )
}

export default LogIn