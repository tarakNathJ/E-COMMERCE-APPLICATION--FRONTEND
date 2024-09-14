import React ,{useState,useEffect} from 'react'
import { BiCaretDown } from "react-icons/bi";
import SingleProduct from './SingleProduct';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios,{isCancel,isAxiosError} from 'axios';
import {BaseApi} from '../DataBase'

// show all product page
function ProductVarient() {

  const UomData = useSelector((state) => state.UserSelectedData);
 
  const [Loding, SetLoding] = useState(true);
  const [Error, setErrors] = useState(false);
  const [Responce, setResponce] = useState(null);

  useEffect(() => {
    
    ApiCallForUomData();
  }, [UomData]);



  const ApiCallForUomData = async () => {
    const controller = new AbortController();
    try {
      SetLoding(true);
      setErrors(false);
      const Responce = await axios.post(`/Base/api/v1/productManager/ShowAllItmeUsing_UOM_ID`, {
        UOM: UomData.UomData
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }, {
        signal: controller.signal
      })

      SetLoding(false);
      setResponce(Responce.data.findVarient);
     



    } catch (error) {
      setErrors(true);
   
      if (axios.isCancel(error)) {
        return
      }
      if (axios.isAxiosError(error)) {
        return
      }

    }

  }



  if (Error) {
    return <h1>404 server side error </h1>
  }

  if (Loding) {
    return <h1> server loding.....</h1>
  }
    
    
    
    
    return (
        <div className='  w-full h-full   bg-showAllProduct  flex overflow-x-hidden p-4 '>
            {/* left part on the page */}
            <div className=' w-[26%] h-full border   '>
              
                    <div className=' w-full h-[21rem] bg-slate-500 '>

                    </div>
                    <div>
                        <h3 className='  py-4 text-2xl  font-serif border-r text-gray-600  border-gray-500'> FILTERS </h3>
                        <form action="" className=' flex flex-col   font-extrabold  border  border-gray-500'>
                            {/*  catagory  drop down */}
                            <div className=' flex  gap-4 items-center    pl-2  pt-4 pb-4 border-b-2  border-gray-500   justify-center relative min-w-[150px] h-[50px] '>
                                <label htmlFor="" className=' text-gray-700  font-semibold  '>CATEGORIES</label>
                                <select name="CATEGORIES" id="CATEGORIES" className=' border-none appearance-none  w-full  text-gray-600   h-10  bg-transparent  font-semibold'>
                                    <option value="Select by">Select By</option>
                                    <option value="DRESS">DRESS</option>
                                    <option value="BELT">BELT</option>
                                    <option value="WOMAN DRESS">WOMAN DRESS</option>
                                    <option value="WATCH">WATCH</option>
                                    <option value="BAG">BAG</option>

                                </select>
                                <div className='  absolute   right-8  '>
                                    <BiCaretDown />
                                </div>

                            </div>
                            {/* price slider */}
                            <div className='border-b-2  border-gray-500 '>
                                <h3 className=' font-semibold text-[17px] text-gray-600  ' >PRICE</h3>
                                <input type="range" name="price" id="price" max={2000} min={250} className='  w-[90%] ' />
                            </div>

                            {/* BRAND DROP DOWN */}
                            <div className=' flex  gap-4 items-center    pl-2  pt-4 pb-4 border-b-2  border-gray-500   justify-center relative min-w-[150px] h-[50px] '>
                                <label htmlFor="" className=' text-gray-700  font-semibold  '>BRAND</label>
                                <select name="BRAND" id="BRAND" className=' border-none appearance-none  w-full  text-gray-600   h-10  bg-transparent  font-semibold'>
                                    <option value="Select by">Select By</option>
                                    <option value="GUCCI">GUCCI</option>
                                    <option value="ZARA">ZARA</option>
                                    <option value="LOUIS PHILIPPE">LOUIS PHILIPPE</option>
                                    <option value="PRADA">PRADA</option>
                                    <option value="SUPREME">SUPREME</option>

                                </select>
                                <div className='  absolute   right-8  '>
                                    <BiCaretDown />
                                </div>

                            </div>

                            {/* size drop down */}
                            <div className=' flex  gap-4 items-center    pl-2  pt-4 pb-4 border-b-2  border-gray-500   justify-center relative min-w-[150px] h-[50px] '>
                                <label htmlFor="" className=' text-gray-700  font-semibold  '>SIZE</label>
                                <select name="SIZE" id="SIZE" className=' border-none appearance-none  w-full  text-gray-600   h-10  bg-transparent  font-semibold'>
                                    <option value="Select by">Select By</option>
                                    <option value="23">23</option>
                                    <option value="34">34</option>
                                    <option value="40">40</option>
                                    <option value="55">55</option>
                                    <option value="60">60</option>

                                </select>
                                <div className='  absolute   right-8  '>
                                    <BiCaretDown />
                                </div>
                            </div>

                            {/* color drop down */}
                            <div className=' flex  gap-4 items-center    pl-2  pt-4 pb-4 border-b-2  border-gray-500   justify-center relative min-w-[150px] h-[50px] '>
                                <label htmlFor="" className=' text-gray-700  font-semibold  '>COLOR</label>
                                <select name="color" id="color" className=' border-none appearance-none  w-full  text-gray-600   h-10  bg-transparent  font-semibold'>
                                    <option value="Select by">Select By</option>
                                    <option value="RED">RED</option>
                                    <option value="BLUE">BLUE</option>
                                    <option value="GREEN">GREEN</option>
                                    <option value="PERPLE">PERPLE</option>
                                    <option value="PINK">PINK</option>

                                </select>
                                <div className='  absolute   right-8  '>
                                    <BiCaretDown />
                                </div>

                            </div>

                        </form>
                    </div>
               
            </div>
            {/* right part on the page */}
            <div className=' w-[80%] h-full flex  flex-wrap gap-2  pl-4  justify-center '>
                <div className='  flex h-12 w-full bg-priceBer rounded-md justify-evenly items-center text-xl  font-medium '>
                    <div className=''>Sort By</div>
                    <div className=''>Popularity</div>
                    <div className=''>Price - low to high</div>
                    <div className=''>Price - high to low</div>
                    <div className=' '>Newest First</div>
                </div >
                <div className=' flex  justify-evenly flex-wrap gap-4 pt-3 '>
                {
                    Responce.map((data) => (
                        <SingleProduct key={data._id} data={data} />

                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ProductVarient


