import React, { useEffect, useState } from 'react'

import { CgSearchFound } from 'react-icons/cg'
import { FiHome } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {BaseApi} from '../DataBase'

import { Link, useNavigate } from 'react-router-dom';
import { SetUOM_data, RemoveUomData } from '../Redux/UserSelectData';


function NaveBer() {

    const Dispatch = useDispatch();
    const Navigation = useNavigate();
    const PersonalInfo = useSelector((state) => state.Profile.data);

    const [Error, SetError] = useState(false);
    const [Loding, SetLoding] = useState(false)
    const [responce,SetResponce]= useState();

    const PrfileLength = Object.keys(PersonalInfo).length
    const [SelectProfileAndLogin, SetSelectProfileAndLogin] = useState("")
    const [searchingData, SetSearchingData] = useState({
        Search: ''
    })
    useEffect(() => {

        if (PrfileLength === 0) {
            SetSelectProfileAndLogin("/LogIn")
        } else {
            SetSelectProfileAndLogin("/Profile")
        }
    }, [PersonalInfo])

    const OnSelectUOMHandler = (Data) => {
        Dispatch(SetUOM_data(Data));
        Navigation('/SelectByProduct')
    }



    // to store user searching
    const SearchingData = (event) => {
        const { name, value } = event.target;
        SetSearchingData({
            ...searchingData, [name]: value
        })
    }

    // product searching api call 
    const OnSearchHandler = async () => {
        

        const controller = new AbortController();
        try {
            SetLoding(false);
            SetError(false);

            const responce = await axios.post(`/Base/api/v1/productManager/searching`, {
                UOM: searchingData.Search
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
                {
                    signal: controller.signal
                })
              
            sessionStorage.setItem("searching", JSON.stringify(responce.data.FindProduct))
            
            Navigation('/SearchingProduct');
            window.location.reload();
            SetError(false);
            SetLoding(true);

        } catch (error) {
            SetError(true);
            if (axios.isCancel(error)) {
                console.log('request canceled', error.message);
                return
            }
            if (axios.isAxiosError(error)) {
                console.log("request canceled  :-", error);
            }

        }
        // api  clearence
        return () => {
            controller.abort()
        }



    }




    return (
        <section className=' w-full   bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300  ' >
            <div className=' h-[64px]  flex justify-between  bg-NaveberBackColor text-white px-10  '>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={`https://i.pinimg.com/474x/15/96/e3/1596e3b738d6e32dbd700844ed062488.jpg`} alt="" className=' object-contain  h-16 w-16 rounded-full ' />
                    </div>
                    <div className='flex flex-col lg:text-2xl md:text-xl sm:text-transparent'>
                        <h2 className='  font-extralight italic '>Delivering To Kolkata </h2>
                        <h2 className=' font-semibold ' >Update Location</h2>
                    </div>

                </div>
                <div className='flex mt-2 gap-0 items-center bg-priceBer   h-10  w-[560px] rounded-md'>
                    <input type="text" name='Search' onChange={SearchingData} className=' w-[485px] h-10  bg-transparent text-xl text-gray-800  outline-none text-center font-semibold ' />
                    <button onClick={OnSearchHandler} className=' text-3xl w-[75px] pl-4 bg-lime-200 text-center  h-full rounded-md bg-gradient-to-r from-slate-400  to-botton '><CgSearchFound /></button>

                </div>
                <div className='flex gap-12'>
                    <div className='flex gap-4 items-center cursor-pointer '>
                        <Link to={SelectProfileAndLogin} className='flex gap-2 items-center' ><img src={`https://cdn-icons-png.freepik.com/256/12595/12595887.png`} className=' object-contain  h-10 w-10 rounded-full bg-white ' alt="" />
                            <h1 className=' text-white text-xl   font-semibold '>{SelectProfileAndLogin == "/Profile" ? "Profile" : "Login"}</h1></Link>
                    </div>
                    <div className='my-auto'  >
                        <Link className='flex gap-4 items-center' to={"/AddToCart"}> <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmwDrXTr4pXqd9DMztskgxJzsRQzRDzdsiA&s`} alt="" className=' object-contain  h-10 w-10 rounded-full ' />
                            <h1 className=' text-white text-xl font-semibold '>Order</h1></Link>
                    </div>
                </div>

            </div>
            <div className='h-[6%] bg-naveberBottom flex justify-between px-5 pt-1 text-xl font-medium' >
                <span className=' cursor-pointer text-2xl text-gray-900'><Link to={'/'}><FiHome /></Link></span>
                <span onClick={() => OnSelectUOMHandler("WATCH")} className=' cursor-pointer'  >WATCH</span>
                <span onClick={() => OnSelectUOMHandler("BELT")} className=' cursor-pointer'>BELT</span>
                <span onClick={() => OnSelectUOMHandler("DRESS")} className=' cursor-pointer'>DRESS</span>
                <span onClick={() => OnSelectUOMHandler("SHOES")} className=' cursor-pointer'>SHOES</span>
                <span onClick={() => OnSelectUOMHandler("WOMAN DRESS")} className=' cursor-pointer'>WOMAN DRESS</span>
            </div>
        </section>
    )
}

export default NaveBer