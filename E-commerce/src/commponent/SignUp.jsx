
import axios from 'axios';
import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {BaseApi} from '../DataBase'



function SignUp() {

    // errors state collect error for sign up from data
    const [errors, setError] = useState({});
    // hide  ot wark send otp div display or not
    const [HIde ,SetHide] = useState(true);
    const [statuses,SetStatus] = useState(false);
    const [statusesSignUP, SetStatusSignUP]  = useState(false);
    const [ErrorSignUP ,SetErrorSignup] = useState(null);
    // const [statusSI]
    const [response,setResponce] = useState(null);
    const [errorAPI,setErrorAPI ] = useState(null);
    // accountType are declear for to store account type by default  Custromer
    const [accountType, setAccountType] = useState('Custromer')
    

    const Navigate = useNavigate();
    // set account type controller
    const AccountTypeHandler = (Data) => {
        setAccountType(Data)
    }


    // declear a fromData to store sign up from data
    const [fromData, setFromData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        Password: '',
        ConformPassword: '',
        OTP: '',
        State: ''

    })


    // OTPemail. are to store email id, to send otp
    const [OTPemail, setEmail] = useState({
        email: ''
    })

    // controler work to store email id,  for otp sender
    const HandleChangeOTP = (e) => {
        const { name, value } = e.target;
        setEmail({
            ...OTPemail, [name]: value
        })
    }

    // send otp controller 
    const SendOtpHandeler = async(e)=>{
       
            e.preventDefault();
            // call api for send otp
            const controller = new AbortController();
            try{
                SetStatus(false);
                setErrorAPI(false);
                const responce = await axios.post(`/Base/api/v1/user/sendOTP`,{
                    email:OTPemail.email
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },
                {
                    signal: controller.signal
                })
                
                SetStatus(true);
                toast.success("OTP send Success fully");

            }catch(error){
                setErrorAPI(true);
                SetStatus(false);
                toast.error("Network Error");
               
                if(axios.isCancel(error)){
                    console.log('request canceled',error.message)
              
                    return 
                }
            }
            SetHide(false);

            // api  clearence
            return ()=>{
                controller.abort()
            }
        }


        //   controller : to store sign up from data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromData({
            ...fromData, [name]: value
        })

    }
    // this controller chack all data full fill for signup from
    const HandleSubmit =async (e) => {
        e.preventDefault()
        const ValiDationError = {}
       if (!fromData.FirstName.trim()) {
            ValiDationError.FirstName = "First Name is required"
        }
        if (!fromData.LastName.trim()) {
            ValiDationError.LastName = "Last Name is required"
        }
        if (!fromData.email.trim()) {
            ValiDationError.email = "email is required"
        }
        if (!fromData.Password.trim()) {
            ValiDationError.Password = "Password is required"
        }

        if (!fromData.OTP) {
            ValiDationError.OTP = "OTP is required"
        }
        if (fromData.State == "SELECTSTATE") {
            ValiDationError.OTP = "start  are required"
        }

        if (fromData.ConformPassword !== fromData.Password) {
            ValiDationError.ConformPassword = "Password are not Match"
        }
         setError(ValiDationError);
        if (Object.keys(ValiDationError).length === 0) {
            await SignUPHandeler();
            
            if (response){
                Navigate('/LogIn');
            }
            
        }
    }


    // api call to sign up
    const SignUPHandeler = async()=>{
        const controller = new AbortController();
        try{
            SetStatusSignUP(false)
           
            const responce = await axios.post(`/Base/api/v1/user/signUp`,{
                FirstName:fromData.FirstName,
                LastName:fromData.LastName,
                Email:fromData.email,
                Password:fromData.Password,
                ReEnterPassword:fromData.ConformPassword,
                OTP:fromData.OTP,
                ActioneType:accountType,
                state:fromData.State
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            {
                signal: controller.signal
            })
            setResponce(responce);
            SetErrorSignup(false);
            SetStatusSignUP(true);
            toast.success("sign up complete ")
            Navigate('/LogIn');
           
        
        }catch(error){
            toast.error("NetWork error");
            SetErrorSignup(true);
            if(axios.isCancel(error)){
                console.log('request canceled',error.message);
                return 
            }
            if(axios.isAxiosError(error)){
                console.log("request canceled  :-",error);
            }
            
        }
         // api  clearence
        return ()=>{
            controller.abort()
        }
    }

   


    // // to redirct log in page
    const RedirectLoginPage = (value)=>{
        if(value == true){
            Navigate("/LogIn");
        }
    }

    
    // ************************************RedirectLoginPage(statusesSignUP);
    
    return (
        <div className=' h-[600px] w-full overflow-x-hidden relative  bg-slate-200 flex justify-center pt-8'>

            <div className='h-[500px] w-[400px] bg-slate-50/80 rounded-tl-3xl rounded-bl-3xl  shadow-2xl '>


                {/* chose acount type   */}
                <div className=' flex mt-6 p-6 justify-between '>
                    <h1 className=' text-2xl  text-gray-500 font-medium '>Sign Up</h1>
                    <div className=' flex gap-4 '>
                        <button onClick={() => AccountTypeHandler('Custromer')} className={`h-8 w-[100px] ${accountType == 'Custromer' ? 'bg-yellow-400' : 'bg-blue-100'} rounded-lg `}>Custromer</button>
                        <button onClick={() => AccountTypeHandler('Seller')} className={`h-8 w-[100px] ${accountType == 'Seller' ? 'bg-yellow-400' : 'bg-blue-100'} rounded-lg`}>Seller</button>
                    </div>
                </div>
                <div className={`${(HIde !== false ?'hidden':'')}`}>
                    <form onSubmit={HandleSubmit} action="">
                        <div className=' flex flex-col gap-5 '>
                            <div className=' flex  justify-evenly  '>

                                <div className=' flex flex-col '>
                                    <input type="text" placeholder='first Name' name='FirstName' autoComplete='off' onChange={handleChange} className=' w-[170px] h-9  border-2 border-b-blue-400 text-xl  border-t-transparent border-x-transparent focus:outline-none bg-transparent text-center  rounded-md ' />
                                    {errors.FirstName && <span className='text-red-400'>{errors.FirstName}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <input type="text" placeholder='Last Name' name='LastName' autoComplete='off' onChange={handleChange} className=' w-[170px] h-9  border-2 border-b-blue-400 text-xl  border-t-transparent border-x-transparent focus:outline-none bg-transparent text-center  rounded-md ' />
                                    {errors.LastName && <span className='text-red-400'>{errors.LastName}</span>}
                                </div>


                            </div>
                            <div className=' flex flex-col pl-6  '>
                                <div className=' flex gap-2'>
                                    <input type="email" placeholder='Email Address' name='email' autoComplete='off' onChange={handleChange} className=' w-[250px] h-9   border-2 border-b-blue-400 text-xl  border-t-transparent border-x-transparent focus:outline-none bg-transparent text-center  rounded-md ' />
                                    {/* <button onClick={SendOTPHandeler} className='w-20 h-8 rounded-lg  font-medium  bg-yellow-400'>Send OTP</button> */}
                                </div>
                                <div>
                                    {errors.email && <span className='text-red-400'>{errors.email}</span>}
                                </div>


                            </div>
                            <div className=' flex justify-between items-center px-6 '>
                                <div className=' flex flex-col  gap-6 '>
                                    <div className='flex flex-col'>
                                        <input type="password" placeholder='Password' name='Password' onChange={handleChange} autoComplete='off' className=' w-[220px] h-9   border-2 border-b-blue-400 text-xl  border-t-transparent border-x-transparent focus:outline-none bg-transparent  text-center rounded-md ' />
                                        {errors.Password && <span className='text-red-400'>{errors.Password}</span>}
                                    </div>
                                    <div>
                                        <input type="text" placeholder='conform Password' name='ConformPassword' onChange={handleChange} autoComplete='off' className=' w-[220px] h-9   border-2 border-b-blue-400 text-xl  border-t-transparent border-x-transparent focus:outline-none bg-transparent  text-center rounded-md ' />
                                        {errors.ConformPassword && <span className='text-red-400'>{errors.ConformPassword}</span>}
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>
                                        <input type="number" placeholder='OTP' name='OTP' autoComplete='off' onChange={handleChange} className='w-[100px] h-9    border-2 border-b-blue-400 text-xl  border-t-transparent border-x-transparent focus:outline-none bg-transparent  text-center rounded-md   ' />
                                    </div>
                                    <div> {errors.OTP && <span className='text-red-400'>{errors.OTP}</span>} </div>
                                </div>
                            </div>
                            <div className=' text-left pl-6 '>
                                <select name="State" onChange={handleChange} id="" className=' bg-slate-100  border-b-blue-200 w-[200px] h-8 rounded-md focus:outline-none border-2 border-x-transparent border-y-transparent '>
                                    <option value="SELECTSTATE">SELECT STATE</option>
                                    <option value="GOA">GOA</option>
                                    <option value="Up">UP</option>
                                    <option value="biner">BIHER</option>
                                    <option value="napal">NAPAL</option>
                                    <option value="west_Bangal">WEST BENGAL</option>
                                    <option value="Gujarat">GUJARAT</option>
                                    <option value="Tamil Nadu">TAMIL NADU</option>
                                    <option value="Tripura">TRIPURA</option>
                                    
                                </select>
                                {errors.State && <span className='text-red-400'>{errors.State}</span>}
                            </div>

                        </div>
                        <div className=' pt-6 '>
                            <button type="submit" className=' w-[150px] h-10 rounded-lg  font-medium  text-xl bg-yellow-400'>Sign Up</button>
                            <div className=' underline pt-2 text-blue-700'>
                                <Link to={'/LogIn'}>  Login </Link>
                            </div>
                        </div>
                    </form>

                </div>



            </div>
            <div className=' h-[500px] w-[600px]  bg-blue-600/40  shadow-2xl rounded-br-3xl rounded-tr-3xl overflow-hidden  '>
                <img className=' object-cover h-full w-full overflow-hidden' src="https://i.pinimg.com/736x/dc/ae/66/dcae66764a7bd4d470bd2446f062b1ff.jpg" alt="" />
            </div>

            <div className={` absolute w-[400px] h-[150px]   animate-pulse  rounded-md bg-slate-400/60  pt-8 ${(HIde == false ?'hidden':'')}  ${(errorAPI == true ?'hidden':'')}  hover:animate-none `}>
                <form action="" onSubmit={SendOtpHandeler} className=' flex flex-wrap gap-2 justify-center '>
                    <div className='flex flex-col justify-center  items-center '>
                        <label htmlFor="" className=' text-2xl text-slate-700  font-bold '>Email</label>
                        <input type="email" placeholder='enter email' name='email' autoComplete='on' onChange={HandleChangeOTP}  className={`w-[300px] h-9  border-2 border-b-gray-600 border-y-transparent border-x-transparent text-xl bg-transparent text-center   hover:bg-transparent  focus:outline-none `} />
                    </div>
                    <button type="submit" className=' w-[80px] h-10 rounded-lg  font-medium mt-8  bg-yellow-400/90'>Send OTP</button>

                </form>
            </div>
        </div>
    )
}

export default SignUp