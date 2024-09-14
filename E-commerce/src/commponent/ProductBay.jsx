import React from 'react'
import { FaTruck,FaHome,FaRupeeSign,FaShieldAlt } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setProductData,SetCustromerData } from '../Redux/BuyProductAndCustromerInfo';


// <FontAwesomeIcon icon="fa-solid fa-truck" />
function ProductBay() {
    const Navigate = useNavigate();
    const Dispatch = useDispatch();

    const product = useSelector((state)=>state.single.data);
    const CustomerInfo = useSelector((state)=>state.Profile);
    

    const ProductBuyHandeler = async()=>{

        if(!CustomerInfo){
            Navigate('/LogIn');
        }
        Dispatch(setProductData(product));
      
        Dispatch(SetCustromerData(CustomerInfo.data)); 
        
        Navigate("/OrderPlace");
    }
    
    return (
        <div className=' flex h-full w-full  justify-between  overflow-x-hidden relative   bg-blue-50' >
            {/* left part  */}
            <div className='  h-full  w-[45%]'>
                <div className='  h-full  w-[100%] bg-blue-50 flex  border-2   '>
                    <div className=' h-[550px] w-[20%]  border-r-2 border-black'>

                    </div>
                    <div className=' h-[600px] w-[80%]  flex flex-col items-center justify-between  '>
                        <div className=' w-[90%] h-[480px] mt-4 overflow-hidden'>
                            <img className=' w-[90%] h-[480px]  object-contain overflow-hidden leading-loose ' src={product.ItmeImage} alt="" />
                        </div>
                        <div className=' flex gap-10 justify-center mb-6 ' >
                            <button className=' bg-yellow-500 w-[200px] h-10 rounded-[5px]  text-xl font-semibold text-white'>ADD TO CART</button>
                            <button onClick={ProductBuyHandeler} className=' bg-orange-500 h-10 w-[200px] rounded-[5px] text-xl font-semibold text-white'>BUY NOW</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* right part */}
            <div className='h-full w-[54%]  flex flex-col mt-14 text-left '>
                {/* Show product name and product brand name */}
                <div className='h-[150px] w-[95%] '>
                    <h3 className=' text-black text-[27px]  font-bold'>{product.ItmeName}</h3> <br />

                    <div className=' flex gap-4 text-[18px]'>
                        <div className=' w-6 h-6 bg-black rounded-full '></div>
                        <h4 className=' text-blue-700 text-xl'>Visit the Amazon Brand - Solimo Store </h4>
                    </div><br />
                    <hr className=' border-black border-[1px] ' />
                </div>
                {/* show product price and EMI related information */}
                <div className=' pt-4 flex flex-col gap-4 w-[95%]'>
                    <div className='flex gap-4'>
                        <h2 className=' text-3xl font-bold text-green-700 font-mono'>-12%</h2>
                        <h2 className=' text-4xl font-bold '>$ {product.PurchasePrice}</h2>
                    </div>
                    <div className=' text-xl text-samibold'>
                        {`${product.TypeColour} COLOURS  ${product.UOM}`}<br />
                        {`  ${product.UOM} SIZE ARES  '${product.Size}' IN`}
                    </div>
                    <hr className=' border-black border-[1px] ' />
                </div>


                {/* Bank transetion or payment offer */}
                <div className=' pt-4 pl-4 flex flex-col gap-8 '>
                    <div className=' h-[50px] w-[50px] rounded-full text-green-950 bg-green-200 text-4xl text-center ' >%</div>
                    <div className='flex gap-8 ' >
                        <div className=' bg-slate-200 h-[180px] w-[250px] rounded-md '>
                            <h2 className=' text-2xl font-bold italic pt-2 px-4'>BANK OFFER</h2>

                            <h4 className=' text-xl px-2'>
                                Upto 17,0000 discount on  select by cradit card,select by any payment card and cripto cerence
                            </h4>
                        </div>
                        <div className=' bg-slate-200  h-[180px] w-[250px] rounded-md '>
                            <h2 className=' text-2xl font-bold  italic pt-2 px-4'>BANK OFFER  </h2>

                            <h4 className=' text-xl px-2'>
                                Upto 17,0000 discount on  select by cradit card,select by any payment card and cripto cerence
                            </h4>
                        </div>
                    </div>
                    <hr className=' border-black border-[1px] ' />
                </div>

                {/* Brand or company provide same service  */}
                <div className='py-4 pl-4 flex justify-evenly w-[95%] '>
                    <div className=' w-[150px]  h-[130px] border bg-blue-100 rounded-md flex flex-col text-xl  justify-between items-center gap-2'>
                        <div  className=' mt-1 w-[40px] h-[40px]  rounded-full  text-gray-500  bg-slate-200  flex justify-center items-center text-2xl '> <FaHome/> </div>
                        <div className=' pl-8 pr-2 text-gray-500 '>10 Day replacement by brand</div>
                    </div>
                    <div className=' w-[150px]  h-[130px] border bg-blue-100 rounded-md flex flex-col text-xl  justify-between items-center gap-2'>
                        <div className=' mt-1 w-[40px] h-[40px]  rounded-full   text-gray-500 bg-slate-200  flex justify-center items-center text-2xl '> <FaShieldAlt/> </div>
                        <div className=' pl-8 pr-2 text-gray-500 '>2 year warranty</div>
                    </div>
                    <div className='w-[150px]  h-[130px] border bg-blue-100 rounded-md flex flex-col text-xl  justify-between items-center gap-2'>
                        <div className=' mt-1 w-[40px] h-[40px]  rounded-full  text-gray-500  bg-slate-200  flex justify-center items-center text-2xl '><FaTruck/></div>
                        <div className=' pl-8 pr-2 text-gray-500 '>Free Delivery</div>
                    </div>
                    <div className=' w-[150px]  h-[130px] border bg-blue-100 rounded-md flex flex-col text-xl  justify-between items-center gap-2'>
                        <div className=' mt-1 w-[40px] h-[40px]  rounded-full   text-gray-500 bg-slate-200  flex justify-center items-center text-2xl '> <FaRupeeSign/>  </div>
                        <div className=' pl-8 pr-2 text-gray-500 '>Case on Delivery available </div>
                    </div>
                </div>
                <hr className=' border-black border-[1px] ' />
            </div>
        </div>
    )
}

export default ProductBay