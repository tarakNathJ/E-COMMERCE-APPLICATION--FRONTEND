import React, { useEffect, useState } from 'react'
import Personal_Information from './ProfileDetails/Personal_Information'
import ManageInformation from './ProfileDetails/ManageInformation'
import PAN_CardInfo from './ProfileDetails/PAN_CardInfo'
import ManageUPI from './ProfileDetails/ManageUPI'
import BrandInformation from './ProfileDetails/Salles/BrandInformation'
import BrandDetailes from './ProfileDetails/Salles/BrandDetailes'
import ProductDetailes from './ProfileDetails/Salles/ProductDetailes'
import CreateSupplierAcount from './ProfileDetails/SuperAdmin/CreateSupplierAcount'
import SpplierAcountProvide from './ProfileDetails/SuperAdmin/SpplierAcountProvide'
import UpdateProfile from './ProfileDetails/SuperAdmin/UpdateProfile'
import InventoryDetailes from './ProfileDetails/Inventory/InventoryDetailes'
import UpcomingOrder from './ProfileDetails/Inventory/UpcomingOrder'
import UpcomingStock from './ProfileDetails/Inventory/UpcomingStock'
import { useDispatch, useSelector } from 'react-redux'
import SetHomePageData from './ProfileDetails/SuperAdmin/SetHomePageData'
import {AiFillDelete,AiOutlinePoweroff} from "react-icons/ai"
import {  removeUserprofileData } from '../Redux/UserData';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function ProfileDetails() {
    const Dispatch= useDispatch();
    const Navigation = useNavigate()
    const Cookis = new Cookies()
    const [accountType,SetAccountType] = useState("Custromer")
    
    useEffect(()=>{
        SetAccountType(sessionStorage.getItem('ActioneType'))
    },[])
    
  
    const [Option, setOption] = useState("ProfileInformetion");
    const OnClickHandeler =(Data) => {
        setOption(Data);       
    }
    const LogOutProfielHandler = async()=>{
      
         Cookis.remove("token");
         Dispatch(removeUserprofileData());
         sessionStorage.removeItem('ActioneType');
         toast.success("log out ")

         Navigation('/');
       
        
    }
    const DeleteProfileHandler = ()=>{
        console.log("DeleteProfileHandler")
    }

  
    return (
        <div className=' flex gap-6   bg-blue-50'>
            {/* left part of profile section */}
            <div className='  h-full  w-[23%]   ml-4 py-4  font-semibold bg-white  text-gray-700'>
                {/* first part releted ot name /image /orders boton releted */}
                <div className='  text-left  ' >

                    {/* profile icon ber */}
                    <div className=' flex gap-6  h-full w-[90%]  items-center ml-4   bg-gray-100 '>
                        {/* profile image */}
                        <div className=' w-16 h-16 bg-slate-500 rounded-full '>
                            <img src="#" alt="" />
                        </div>
                        {/* name and surname */}
                        <div >
                            <h5>hello</h5>
                            <h3 className=' text-xl '>Tarak Jana</h3>
                        </div>

                    </div>
                    <h3 className=' cursor-pointer text-[20px] ml-4 my-2'>My Orders  </h3>

                </div>
                <hr className=' border border-black ' />
                {/* second part ,related to account setting  */}
                <div className=' flex flex-col text-left pl-2  my-2'>
                    <div className=' flex gap-2  items-center '>
                        <div className=' h-4 w-4 bg-black rounded-full '></div>
                        <h3 className=' text-2xl font-medium m-1 '>Account Setting</h3>
                    </div>
                    <ul className='flex flex-col gap-1 ml-16 text-[18px] '>
                        <li onClick={() => OnClickHandeler("ProfileInformetion")} className=' cursor-pointer hover:underline'>Profile Informetion</li>
                        <li onClick={() => OnClickHandeler("ManageAddress")} className=' cursor-pointer hover:underline'>Manage Address</li>
                        <li onClick={() => OnClickHandeler("PANCardInformetion")} className=' cursor-pointer hover:underline'>PAN Card Informetion</li>
                    </ul>
                </div>
                <hr className=' border border-black ' />
                {/* third part related for payment */}
                <div className=' flex flex-col text-left pl-2  my-2'>

                    <div className=' flex gap-2  items-center '>
                        <div className=' h-4 w-4 bg-black rounded-full '></div>
                        <h3 className=' text-2xl font-medium m-1 '>Account Setting</h3>
                    </div>
                    <ul className='flex flex-col gap-1 ml-16 text-[18px] '>
                        <li className=' cursor-pointer hover:underline'>Gift Cards</li>
                        <li onClick={() => OnClickHandeler("SaveUPI")} className=' cursor-pointer hover:underline'>Save UPI</li>
                        <li className=' cursor-pointer hover:underline'>Save Card</li>
                    </ul>

                </div>
                <hr className=' border border-black ' />
                {/* forth part related My Stuff */}
                <div className=' flex flex-col text-left pl-2  my-2'>
                    <div className=' flex gap-2  items-center '>
                        <div className=' h-4 w-4 bg-black rounded-full '></div>
                        <h3 className=' text-2xl font-medium m-1 '>My Stuff</h3>
                    </div>

                    <ul className='flex flex-col gap-1 ml-16 text-[18px] '>
                        <li className=' cursor-pointer hover:underline'>My Coupons </li>
                        <li className=' cursor-pointer hover:underline'>My wiselist </li>
                        <li className=' cursor-pointer hover:underline'>My notification</li>
                        <li className=' cursor-pointer hover:underline'>My Review & Ratings</li>
                    </ul>
                </div>

                <hr className=' border border-black ' />

                {/* five part related to seller */}
                <div className={`flex flex-col text-left pl-2  my-2 ${(accountType!=="Seller"?" hidden ":"" )} `}>
                    {/*  
                     
                    
                    */}
                    
                    <BrandInformation OnClickHandeler={OnClickHandeler} />
                </div>

                <hr className=' border border-black ' />

                <div className={`flex flex-col text-left pl-2  my-2 ${(accountType!=="SuperAdmin"?" hidden ":"" )}`}>
                    <CreateSupplierAcount OnClickHandeler={OnClickHandeler} />
                </div>
                <hr className=' border border-black ' />
                <div className={`flex flex-col text-left pl-2  my-2  ${(accountType!=="Supplier"?" hidden ":"" )} `}>
                    <InventoryDetailes OnClickHandeler={OnClickHandeler} />
                </div>
                <hr className=' border border-black ' />
                <div className='text-xl font-semibold mt-4  flex flex-col gap-3 items-center'>
                    <div onClick={LogOutProfielHandler} className='text-black flex flex-wrap items-center gap-3 text-2xl cursor-pointer'>
                        <AiOutlinePoweroff/>
                        <h4>LOG OUT</h4>
                    </div>
                    <div onClick={DeleteProfileHandler} className=' text-red-700 flex flex-wrap items-center gap-3 text-2xl cursor-pointer'>
                        <AiFillDelete/>
                        <h4>Delete Account</h4>
                    </div>
                </div>
            </div>
            {/* right part of profile section */}
            <div className=' h-full w-[75%]   '>
                {Option == 'ProfileInformetion' ? <Personal_Information /> : null}
                {Option == 'ManageAddress' ? <ManageInformation /> : null}
                {Option == 'PANCardInformetion' ? <PAN_CardInfo /> : null}
                {Option == 'SaveUPI' ? <ManageUPI /> : null}
                {Option == 'BrandCreation' ? <BrandDetailes /> : null}
                {Option == 'ProductSell' ? <ProductDetailes /> : null}
                {Option == 'ProvideSupplierRole'?<SpplierAcountProvide/>  : null}
                {Option == 'UpdateProfile' ? <UpdateProfile/>:null}
                {Option ==  'UpcomingOrder' ? <UpcomingOrder/>:null}
                {Option == 'Upcomingstock' ?<UpcomingStock/>:null}
                {Option == 'HomePageData' ?<SetHomePageData />:null}
                
            </div>
        </div>
    )
}

export default ProfileDetails

