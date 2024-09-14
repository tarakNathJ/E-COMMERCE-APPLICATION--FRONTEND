import React, { useState } from 'react'
import axios, { isAxiosError, isCancel } from 'axios';
import { useSelector } from 'react-redux';
import {BaseApi} from '../../../DataBase'


function SpplierAcountProvide() {

  const datas = useSelector((store) => store.Profile);
  const [ErrorFind, setError] = useState(null);
  const [status1, SetStatus1] = useState(false);

  const [Status2,SetStatus2] = useState(false);
  const [ErrorProvideAccouny ,SetErrorProvideAccount] = useState(null);
  const  [ResponceProvideRole,SetProvideRole] = useState(null);

  const [Responce, SetResponce] = useState(null)


  const [EmployEmail, SetEmployEmail] = useState({
    CreateEmployAccount: ''
  })

  const [FromData, SetFromData] = useState({
    SupplierName: '',
    ContactPerson: '',
    ContactTitle: '',
    ContactEmail: '',
    PhoneNo: '',
    CityNo: '',
    State: '',
    Cauntry: '',
    Address: '',
    AccountType: '',
    LicenseNum: '',
    PaymentTerms: '',
    PaymentMethod: ''
  })
  // ***********enter user email and find user *******************

  // collect data for user email
  const OnChangeHandelerEmploy = (event) => {
    const { name, value } = event.target;
    SetEmployEmail({
      ...EmployEmail, [name]: value
    })
  }

  // chack data are insert or not and app i call
  const OnsubmitUsr = async (event) => {
    event.preventDefault();
    const ChackIng = {};
    if (!EmployEmail.CreateEmployAccount.trim()) {
      ChackIng.CreateEmployAccount = "enter your email "
    }
    if (Object.keys(ChackIng).length === 0) {
      await FindUserDetailesApiCall();
      alert("data send success fully")

    }
  }

  // api  call for user find 
  const FindUserDetailesApiCall = async () => {
    const controller = new AbortController();
    try {
      SetStatus1(false)
      const Responce = await axios.post(`/Base/api/v1/inventoryManager/FindUser`, {
        Email: EmployEmail.CreateEmployAccount
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${datas.data.token}`,
        }
      }, {
        signal: controller.signal
      })
      SetResponce(Responce.data.findUserLocation);
      SetStatus1(true);

    } catch (error) {
      SetStatus1(false);

      if (axios.isCancel(error)) {
        console.log('request canceled', error.message);
        return
      }
      if (axios.isAxiosError(error)) {
        setError(error);
        console.log(error);
        return
      }
    }
  }




  // *********************************** provide role 
  const OnChangeHandeler = (event) => {
    const { name, value } = event.target;
    SetFromData({
      ...FromData, [name]: value
    })
  }

 

  const OnsubmitHandeler = async (event) => {
    event.preventDefault();
    const ValiDationError = {}
    if (!FromData.SupplierName.trim()) {
      ValiDationError.SupplierName = "enter supplier name"
    }
    if (!FromData.ContactPerson.trim()) {
      ValiDationError.ContactPerson = "enter your Parents name"
    }
    if (!FromData.ContactTitle.trim()) {
      ValiDationError.ContactPerson = "enter supplier Title"
    }
    if (!FromData.PhoneNo.trim()) {
      ValiDationError.PhoneNo = "enter your phone number"
    }
    if (!FromData.CityNo.trim()) {
      ValiDationError.CityNo = "enter your City number"
    }
    if (!FromData.State.trim()) {
      ValiDationError.State = "enter your State name"
    }
    if (!FromData.Cauntry.trim()) {
      ValiDationError.Cauntry = "enter your Cauntry"
    }
    if (!FromData.Address.trim()) {
      ValiDationError.Address = "enter your Address"
    }
    if (!FromData.AccountType.trim()) {
      ValiDationError.AccountType = "enter your AccountType"
    }
    if (!FromData.LicenseNum.trim()) {
      ValiDationError.LicenseNum = "enter your LicenseNum"
    }
    if (!FromData.PaymentTerms.trim()) {
      ValiDationError.PaymentTerms = "enter your PaymentTerms"
    }
    if (!FromData.PaymentMethod.trim()) {
      ValiDationError.PaymentMethod = "enter your PaymentMethod"
    }

    if (Object.keys(ValiDationError).length === 0) {
      await APIcallInProvideRole()
     
    }

  }

  const APIcallInProvideRole = async () => {
    const Controller = new AbortController();
    try {
      SetStatus2(false)
     
      const responce = await axios.post(`/Base/api/v1/inventoryManager/Supplier`, {
        SupplierName: FromData.SupplierName,
        ContactPerson: FromData.ContactPerson,
        ContactTitle: FromData.ContactTitle,
        ContactEmail: FromData.ContactEmail,
        PhoneNo: FromData.PhoneNo,
        CityNo: FromData.CityNo,
        State: FromData.State,
        Cauntry: FromData.Cauntry,
        Address: FromData.Address,
        LicenseNum: FromData.LicenseNum,
        PaymentMethod: FromData.PaymentMethod,
        PaymentTerms: FromData.PaymentTerms,
        location_ID:Responce.Location_ID ,
        ActioneType: FromData.AccountType

      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${datas.data.token}`,
        }
      }, {
        signal: Controller.signal
      })
      SetProvideRole(responce.data);
      SetStatus2(true);
      alert('success fully ')
    } catch (error) {
      SetStatus2(false)
      SetErrorProvideAccount(error);
      if (axios.isCancel(error)) {
        console.log('request canceled', error.message);
        return
      }
      if (axios.isAxiosError(error)) {
        console.log(error);
        return
      }

    }
  }


  return (
    // find user account
    <div className='w-full h-full ml-8 text-left'>
      <div className=' mt-0 flex gap-4' >
        <form action="" onSubmit={OnsubmitUsr}>

          <input type="email" required name='CreateEmployAccount' placeholder='Enter  Employ email' onChange={OnChangeHandelerEmploy} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />


          <button type="submit" className=' text-xl h-12 w-[130px] bg-blue-500 mt-4 rounded-md  hover:underline   ease-in '>Search</button>
        </form>
      </div>






      {/* brand creation section  */}
      <section className=' mt-8 pt-0'>
        <h1 className='text-3xl font-bold mt-8 '>PROVIDE ROLE</h1>
        <hr className=' border-black -ml-8 w-[90%] border-[1px] mt-3 ' />
        <div>
          <form onSubmit={OnsubmitHandeler} >
            <div className='flex  items-center'>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-8 ml-12 rounded-md font-bold text-[27px]  '> Name</label>
                <input type="text" name='SupplierName' placeholder='Enter Supplier Name' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-8 ml-12 rounded-md font-bold text-[27px]  '>Contact Person</label>
                <input type="text" name='ContactPerson' placeholder='Enter Contact Person' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
            </div>
            <div className='flex   items-center'>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Contact Title</label>
                <input type="text" placeholder='Enter Contact Title' name='ContactTitle' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Contact Email</label>
                <input type="email" placeholder='Enter New Contact Email' name='ContactEmail' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
            </div>

            <div className='flex  items-center'>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>PhoneNo</label>
                <input type="number" placeholder='Enter PhoneNo' name='PhoneNo' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>City No</label>
                <input type="number" placeholder='Enter your City No' name='CityNo' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl uppercase  ' />
              </div>
            </div>
            <div className='flex   items-center'>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>State</label>
                <input type="text" placeholder='Enter State' name='State' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  uppercase ' />
              </div>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Cauntry</label>
                <input type="text" placeholder='Enter Cauntry' name='Cauntry' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
            </div>
            <div className='flex  items-center'>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Address</label>
                <input type="text" placeholder='Enter Address' name='Address' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>License Number</label>
                <input type="text" placeholder='Enter LicenseNum' name='LicenseNum' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
            </div>

            <div className='flex  items-center'>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Payment Method</label>
                <input type="text" placeholder='Enter PaymentMethod' name='PaymentMethod' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
              <div className='flex flex-col'>
                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Payment Terms</label>
                <input type="number" placeholder='Enter PaymentTerms' name='PaymentTerms' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
              </div>
            </div>
            <div className=' ml-6 w-[500px] h-16 pl-4 mt-6 flex gap-8   '>
              <div className='  pl-4 flex flex-col gap-4 '>
                <label className=' text-xl  text-black font-semibold ' > Account Type</label>
                <select name="AccountType" onChange={OnChangeHandeler} className='w-[250px] h-20 ' id="">
                  <option value="select">..select option..</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Finence">Finance</option>
                  <option value="Seller">Seller</option>

                </select>
              </div>
              <div className=''>
                <button type="submit" className=' text-xl h-10 w-[130px] bg-blue-500 mt-4 rounded-md  hover:underline   ease-in '>UPLOAD</button>
              </div>
            </div>

          </form>
        </div>
      </section>
    </div>
  )
}

export default SpplierAcountProvide