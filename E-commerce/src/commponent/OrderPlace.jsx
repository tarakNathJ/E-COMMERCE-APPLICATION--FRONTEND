
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeInformation } from '../Redux/BuyProductAndCustromerInfo';
import { useNavigate } from 'react-router-dom';
import axios, { isCancel } from 'axios';
import { BaseApi } from '../DataBase'



function OrderPlace() {
    const Dispatch = useDispatch()
    const Navigation = useNavigate();
    const [Peace, SetPeace] = useState(1);
    const CustromerData = useSelector((state) => state.SellProductInfo.CustromerData);
    const ProductData = useSelector((state) => state.SellProductInfo.ProductData);
    const [Status, SetStatus] = useState(false)
    const [ErrorInOrderCreate, SetErrorInOrderCreate] = useState(null);
    const [ErrorInVerify, SetErrorInVerify] = useState(null);
    const [ErrorInProductSell, SetErrorInProductSell] = useState(null);





    // Increase and decrease item quentity
    const SelectPeace = (data) => {
        if (data < 1) {
            SetPeace(1);
        }
        SetPeace(data);
    }

    let TotalPrice = (ProductData.PurchasePrice) * Peace;

    // remove information and redirect in home page
    const RemoveItemHangeler = () => {
        Dispatch(removeInformation())
        Navigation('/');
    }

    // ************************* api call in create Order payment gateway***********
    // handlePayment Function
    const handlePayment = async () => {

        const Controller = new AbortController();
        try {
            SetStatus(false);
            const Responce = await axios.post(`/Base/api/v1/paymentGetway/order`, {
                Amount: TotalPrice
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }, {
                signal: Controller.signal
            })

            SetStatus(true);

            handlePaymentVerify(Responce.data.data, Responce.data.ApiKey);

        } catch (error) {
            SetStatus(false);
            SetErrorInOrderCreate(error);
            if (axios.isCancel(error)) {
                console.log('request canceled', error.message);
                return
            }
            if (axios.isAxiosError(error)) {
                console.log("request canceled  :-", error);
                return
            }
        }
    }


    // ************************* api call in chack varification payment gateway***********

    // Varify payment function 
    const handlePaymentVerify = async (data, KEY) => {


        const options = {
            key: KEY,
            amount: data.amount,
            currency: data.currency,
            name: "E-Commerce",
            description: "Test Transaction",
            order_id: data.id,

            handler: async (response) => {
                const Controller = new AbortController();
                try {


                    SetStatus(false);
                    const responce = await axios.post(`/Base/api/v1/paymentGetway/verify`, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }, {
                        signal: Controller.signal
                    })
                    SetStatus(true);
                    // console.log(responce);
                    await purchaseorderlineHandeler(responce.data.SavePaymentResept);
                } catch (error) {
                    SetStatus(false);
                    SetErrorInVerify(error);
                    if (axios.isCancel(error)) {
                        console.log('request canceled', error.message);
                        return
                    }
                    if (axios.isAxiosError(error)) {
                        console.log("request canceled  :-", error);
                        return
                    }

                }
            }
        };

        const rzp1 = new window.Razorpay(options);

        await rzp1.open();
    }

    // // ************************* api call to create purchase order line ***********
    const purchaseorderlineHandeler = async (data) => {

        const Controller = new AbortController();
        try {
            const responce = await axios.post(`/Base/api/v1/inventoryManager/purchaceOrder`, {
                ItemName: ProductData.ItmeName,
                Size: ProductData.Size,
                SKU: ProductData.SUK,
                UOM: ProductData.UOM,
                OrderQTY: Peace,
                OrderType: 'OPEN_BOX',
                LOC: 123.0090,
                CC: 12.0900,
                PaymentId: data._id
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorisation: `Bearer ${CustromerData.token}`,
                }
            }, {
                signal: Controller.signal
            })
            alert("order place confurm");
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('request canceled', error.message);
                return
            }
            if (axios.isAxiosError(error)) {
                console.log("request canceled  :-", error);
                return
            }
        }


        return () => {

        }
    }

    return (
        <div className=' w-full h-[550px] bg-slate-50 pt-8  pl-[-10px] flex flex-wrap gap-8 '>
            <div className=' w-[65%] h-full  flex flex-col gap-6 '>
                <div className='bg-slate-100 h-[90px] flex justify-between px-8 ' >
                    <div className=' flex flex-col gap-2 text-gray-700 '>
                        <div className=' flex items-center   gap-4 '>
                            <div className='w-5 h-5 bg-blue-700 mt-2 text-white  font-medium'>1</div>
                            <h1 className=' text-[20px] font-bold  ' >LOGIN</h1>

                        </div>
                        <h3 className=' font-medium pl-8'>Tarak - 938253085</h3>
                    </div>
                    <button className=' h-10 w-32 text-blue-700 mt-4 border-gray-300 border-2 bg-white text-xl font-medium '>Change</button>

                </div>



                <div className='bg-slate-100 h-[120px] flex justify-between px-8'>
                    <div className=' flex flex-col gap-2 text-gray-700  '>
                        <div className=' flex items-center   gap-4 '>
                            <div className='w-5 h-5 bg-blue-700 mt-2 text-white  font-medium'>2</div>
                            <h1 className=' text-[20px] font-bold  ' >Delivery Address </h1>

                        </div>
                        <h3 className=' font-medium pl-8 w-[550px]'>Lorem ipsum dolor, sit amet consectetur adipisicing  ut voluptatum ad quae aspernatur voluptates ex, esse tenetur ratione debitis error porro, fugit at! Inventore, et?</h3>
                    </div>
                    <button className=' h-10 w-32 text-blue-700 mt-4 border-gray-300 border-2 bg-white text-xl font-medium '>Change</button>
                </div>
                <div className='bg-slate-100 h-full   border-1 '>
                    <div className=' w-full h-[50px] bg-blue-600 flex gap-4 items-center text-white font-medium pl-4 ' >
                        <div className=' h-5 w-5 bg-white text-blue-700  '>3</div>
                        <h1 className='text-xl'>ORDER SUMMARY</h1>
                    </div>

                    <div className='h-[250px] w-full flex  justify-between '>
                        <div className='w-[25%] h-full bg-transparent'>
                            <img src={ProductData.ItmeImage} alt="" className='h-[90%] w-full mt-3  object-contain ' />
                        </div>
                        <div className='w-[74%] h-full bg-slate-100'>
                            <div className='text-left  font-medium text-2xl mt-6 ml-6 ' >
                                <h1>{ProductData.ItmeName}</h1>
                                <h2 className=' text-green-800'> Size : {ProductData.Size}</h2>
                            </div>
                            <div className='flex gap-8 mt-10 ml-6'>
                                <div className='text-4xl font-bold flex gap-2 '>
                                    <button onClick={() => SelectPeace(Peace + 1)}>+</button>
                                    <h1 className=' h-8 w-10 border-2 text-center border-gray-400 text-xl mt-2  rounded-md '>{Peace}</h1>
                                    <button onClick={() => SelectPeace(Peace - 1)}>-</button>
                                </div>
                                <button onClick={RemoveItemHangeler} className=' h-8 w-36 bg-slate-400 text-white rounded-md mt-2 hover:bg-slate-600' >Remove</button>
                            </div>
                            <button onClick={handlePayment} className='h-10 w-44 mt-4  ml-96 text-xl font-bold text-white   bg-orange-500 rounded-sm '>Continue</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className=' w-[27%] h-[400px] text-xl bg-white flex justify-evenly flex-col text-black border shadow-sm shadow-gray-300 '>
                <div className='text-left pl-4  '>
                    <h1 className='text-gray-500'>PRICE DETAILS</h1>
                    <h1>........................................................................</h1>
                </div>
                <div className='flex justify-between items-center px-8'>
                    <h1>Price(1) </h1>
                    <h1>{ProductData.PurchasePrice}</h1>
                </div>
                <div className='flex justify-between items-center px-8'>
                    <h1>Peace </h1>
                    <h1>{Peace}</h1>
                </div>
                <div className='flex justify-between items-center px-8'>
                    <h1>Delivery Charges </h1>
                    <h1>$ 24</h1>

                </div>
                <h1>..........................................................................</h1>

                <div className='flex justify-between items-center px-8'>
                    <h1 className=' font-medium  text-black'>Total Payable </h1>
                    <h1 className=' font-medium '>{TotalPrice}</h1>
                </div>
                <hr className='border text-black border-black' />

                <h1 className=' text-green-900 '>You total save on this order</h1>
            </div>
        </div>
    )
}

export default OrderPlace



