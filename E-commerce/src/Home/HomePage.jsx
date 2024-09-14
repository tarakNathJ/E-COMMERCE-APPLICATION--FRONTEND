import React, { useState, useEffect } from 'react'
import heroImg from '../assets/holi.jpg'

import { useLoaderData } from 'react-router-dom'

import Card2 from './Card2';
import Card3 from './Card3';

import { removeUserprofileData } from '../Redux/UserData';
import {BaseApi} from '../DataBase'

import First_Component from './First_Component';
import axios from 'axios';

import Card3First from './Card3First';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';


const HomePage = () => {
    const Coock = new Cookies();
    const Dispatch = useDispatch();
    const [Responce, setResPonce] = useState({});
    const [Loding, SetLoding] = useState(false);
    const [Error, SetError] = useState(false);
    const { Array, PriceDataArray, ThirdSetArray, ForthSetArray } = useLoaderData();

    console.log();
    
    useEffect(() => {

        if (!Coock.get("token")) {
            Dispatch(removeUserprofileData())

        }

        ; (async () => {



            // fetch Brand Catelog image...
            const controller = new AbortController();
            try {

                SetError(false)
                SetLoding(true);
                const Responce = await axios.post(`/Base/api/v1/productManager/ShowCatelog`, {
                    Location_ID: ThirdSetArray[0].location_ID
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, {
                    signal: controller.signal
                })




                setResPonce(Responce.data.FindCateLog)
                SetLoding(false);
            } catch (error) {
                SetError(true);
                if (axios.isCancel(error)) {
                    return
                }
                if (axios.isAxiosError(error)) {
                    return
                }

            }
        })()




    }, [])


    // console.log("image :",Responce.Image);

    if (Loding) {
        return <div className=' justify-center items-center'>
            <div className=' flex justify-center items-center h-20 w-20 bg-slate-300 rounded-full   animate-bounce '>
                <hr className=' border-red-600 border-2 w-16 animate-spin ' />
            </div>
            <hr className='  border-red-600 border-2 w-40 ' />
        </div>
    }
    if (Error) {
        return <h1> server side error ....</h1>
    }

    return (
        <div className='lg:w-full  md:w-full sm:w-full md:h-full sm:h-full  lg:h-full left-0 right-0 flex flex-col gap-0 '>
            {/* banner section  */}
            <div className='  lg:w-[100%] lg:h-[50%] md:w-full  sm:w-full bg-gradient-to-r from-linear-right via-linear-mid to-linear-left flex justify-center '>
                <div className=' h-80 lg:w-[480px] '>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            {/* card section 1 */}

            <div className=' flex flex-row flex-wrap justify-between mx-1 my-1  '>
                {
                    Array.map((Data, length) => {

                        return (
                            <First_Component key={length} Data={Data} />
                        )

                    })

                }
            </div>
            {/* card section 2 */}

            <div className=' lg:ml-8 lg:w-[1280px] md:w-full sm:w-full lg:h-[50%] sm:h-20 md:h-50  bg-Cart2 ' >
                <div className='w-full h-14  '>
                    <h1 className=' text-3xl mt-2 ml-4 font-semibold italic text-slate-600-500/20'>Under 1200 Rupice</h1>
                </div>
                <div className='flex flex-row gap-1 justify-evenly '>
                    {
                        PriceDataArray.map((data) => {
                            return (
                                <Card2 key={data._id} data={data} />
                            )
                        })
                    }
                </div>
            </div>
            {/* cart and brand promosion */}
            <div className=' w-[100%] h-[50%] ml-8 mt-4  flex flex-row gap-4 justify-between '>
                <Card3First ThirdSetArray={ThirdSetArray} />



                <div className='  bg-zinc-300  w-[64%]  h-full '>
                    <img src={Responce.Image} alt="" className='w-full h-full object-cover overflow-hidden' />
                </div>
            </div>
            <div className=' flex flex-row justify-evenly gap-4 ml-8 mt-4 '>
                {
                    ForthSetArray.map((data) => {
                        return (
                            <Card3 key={data._id} data={data} />
                        )
                    })
                }
            </div>
            {/* end cart and  brand promotion */}
            <div className='ml-8 w-[1280px] h-[350px] mt-4 bg-slate-700 flex flex-row justify-between'>
                <div className=' w-[35%] h-full  bg-slate-950 ' ></div>
                <div className=' w-[64%] h-full  bg-slate-300 ' >
                    <div className=' w-full h-14 bg-amber-50 '></div>
                    <div></div>
                </div>
            </div>

           

        </div>
    )
}

export default HomePage


