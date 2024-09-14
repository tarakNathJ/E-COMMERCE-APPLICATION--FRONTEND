import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GiEmptyHourglass } from "react-icons/gi";
import AddToCartSingleProduct from './AddToCartSingleProduct';
import { useNavigate } from 'react-router-dom';
import {BaseApi} from '../DataBase'


function AddToCart() {
    const datas = useSelector((store) => store.Profile);
    const Navigate = useNavigate();

    const [loding, Setloding] = useState(false);
    const [Error, SetError] = useState(false);

    const [responce, Setresponce] = useState([]);
    useEffect(() => {
        if (!datas.data.token) {
            Navigate('/LogIn')

        }else{
            ApiCallHandler();
        }

    }, [])

    const ApiCallHandler = async () => {
        try {
            SetError(false)
            Setloding(true);
            const responce = await axios.post(`${BaseApi}/api/v1/productManager/showAllOrder`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorisation: `Bearer ${datas.data.token}`,
                }
            })
            Setresponce(responce.data.UserOrder.PurchaseOrder);

            SetError(false);
            Setloding(false)

        } catch (error) {
            SetError(true);
            Setloding(false);
            if (axios.isAxiosError(error)) {
                console.log(error);
                return
            }


        }

    }



    if (Error) {
        return <h1>server error....</h1>
    }
    if (loding) {
        return <h1>server error....</h1>
    }



    return (
        <div className=' flex  w-full h-full justify-center pt-6 gap-10 '>

            {
                responce.map((data) => <AddToCartSingleProduct data={data} key={data._id} />)
            }
        </div>

    )
}

export default AddToCart

