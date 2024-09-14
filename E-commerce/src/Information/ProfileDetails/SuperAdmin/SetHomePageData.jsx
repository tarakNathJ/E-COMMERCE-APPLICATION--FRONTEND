import axios, { isAxiosError, isCancel } from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



function SetHomePageData() {
  const datas = useSelector((store) => store.Profile)
  const [FullFillData, SetDataFullFill] = useState({});
  const [status, setStatus] = useState(null);
  const [GetStatus,setStatus_Get] = useState(false);
  const [GetError,GetSetError] = useState(false);
  const [Error, setError] = useState(null);
  const[ BrandData,setBrandData]= useState([]);

  useEffect(()=>{
      ;(async()=>{
        try{
          setStatus_Get(true);
          GetSetError(false);
          const Responce = axios.get(`/Base/api/v1/productManager/ShowAllBrand`).then((data)=>setBrandData(data.data.showAllBrand)).catch((error)=>{
            GetSetError(true);
            console.log("sumthing is wrong : ",error);
          });
          setStatus_Get(false);
        }catch(error){
          GetSetError(true);
          return
        }
        
      })()
  },[])


  const [fromData, SetFromData] = useState({
    First: '',
    second: '',
    Third: '',
    Forth: '',
    Five: '',
    Six: '',
    Seven: '',
    eight: '',
    SecondPage: '',
    ThirdSet: '',
    ForthSet: ''

  })

  const OnchangeHendeler = (event) => {
    const { name, value } = event.target;
    SetFromData({
      ...fromData, [name]: value
    })

  }
  const OnsubmitFrom = async (event) => {
    event.preventDefault();
    const ChackPointer = {};
    if (!fromData.First.trim()) {
      ChackPointer.First = "chose Option"
    }
    if (!fromData.second.trim()) {
      ChackPointer.second = "chose Option"
    }
    if (!fromData.Third.trim()) {
      ChackPointer.Third = "chose Option"
    }
    if (!fromData.Forth.trim()) {
      ChackPointer.Forth = "chose Option"
    }
    if (!fromData.Five.trim()) {
      ChackPointer.Five = "chose Option"
    }
    if (!fromData.Six.trim()) {
      ChackPointer.Six = "chose Option"
    }
    if (!fromData.Seven.trim()) {
      ChackPointer.Seven = "chose Option"
    }
    if (!fromData.eight.trim()) {
      ChackPointer.eight = "chose Option"
    }
    if (!fromData.SecondPage) {
      ChackPointer.SecondPage = "Enter prce"
    }
    if (!fromData.ThirdSet.trim()) {
      ChackPointer.third = "Chose Option"
    }
    if (!fromData.ForthSet.trim()) {
      ChackPointer.Forth = "Chose Option"
    }
    SetDataFullFill(ChackPointer)
    const UOMarray = [fromData.First, fromData.second, fromData.Third, fromData.Forth, fromData.Five, fromData.Six, fromData.Seven, fromData.eight]
    if (Object.keys(ChackPointer).length === 0) {

      await ApiCallToUploadData(UOMarray);

    }
  }

  const ApiCallToUploadData = async (Data) => {
    const controller = new AbortController()


    try {
  
      const Responce = await axios.post(`/Base/api/v1/inventoryManager/UpdateFontedPage/Data`, {
        FirstSet: Data,
        SecondSet: fromData.SecondPage,
        ThirdSet: fromData.ThirdSet,
        ForthSet: fromData.ForthSet
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${datas.data.token}`,
        }
      }, {
        signal: controller.signal
      })
    } catch (error) {

      if (axios.isCancel(error)) {
        console.log('request canceled', error.message);
        return
      }
      if (axios.isAxiosError(error)) {
        console.log('request canceled', error.message);
        return
      }



    }
  }

  if(GetStatus ){
    return <h1>Server is loding...</h1>
  }
  if(GetError){
    return <h1>Server side error</h1>
  }

  return (
    <div className=' text-gray-600 w-[100%] h-[100%] text-left'>
      <form action="" onSubmit={OnsubmitFrom}>
        <div className=' pt-8 pl-6'>
          <h1 className='text-3xl  uppercase mb-4'>First Set (UOM) </h1>

          <hr className=' text-black border-gray-700 border-2 w-[80%]' />
          <div className='mt-6 flex flex-col flex-wrap gap-8'>
            <div className=' flex justify-between bg-transparent flex-wrap'>
              <select onChange={OnchangeHendeler} name='First' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
              <select onChange={OnchangeHendeler} name='second' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
              <select onChange={OnchangeHendeler} name='Third' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
              <select onChange={OnchangeHendeler} name='Forth' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
            </div>
            <div className=' flex justify-between bg-transparent flex-wrap'>
              <select onChange={OnchangeHendeler} name='Five' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
              <select onChange={OnchangeHendeler} name='Six' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
              <select onChange={OnchangeHendeler} name='Seven' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
              <select onChange={OnchangeHendeler} name='eight' className=' bg-transparent  text-2xl border-b-2 border-gray-700 '>
                <option value="">Select UOM ID</option>
                <option value="WATCH">WATCH</option>
                <option value="BEG">BEG</option>
                <option value="DRESS">DRESS</option>
                <option value="SHOES">SHOES</option>
                <option value="WOMAN DRESS">WOMAN DRESS</option>

              </select>
            </div>
          </div>
        </div>
        <div className='text-3xl mt-10 pl-6  uppercase'>
          <h1 className='mb-4'>Second Set (Set Price) </h1>
          <hr className=' text-black border-gray-700 border-2 w-[80%]' />
          <div className=' mt-2 flex flex-col gap-1 text-2xl '>
            <h4>enter Price </h4>
            <input onChange={OnchangeHendeler} type="number" name="SecondPage" id="" className='w-[300px] bg-transparent border-b-2 border-black ' />

          </div>
        </div>
        <div className='text-3xl mt-10 pl-6  uppercase'>
          <h1 className='mb-4'>Third Set (Brand Name) </h1>
          <hr className=' text-black border-gray-700 border-2 w-[80%]' />
          <select onChange={OnchangeHendeler} name='ThirdSet' className='mt-4 bg-transparent  text-2xl border-b-2 border-gray-700 '>
           
            {
              BrandData.map((data)=><option key={data._id} value={data._id}>{data.Brand}</option> )
            }

          </select>
        </div>
        <div className='text-3xl mt-10 pl-6  uppercase'>
          <h1 className='mb-4'>Forth Set (UOM ID) </h1>
          <hr className=' text-black border-gray-700 border-2 w-[80%]' />
          <select onChange={OnchangeHendeler} name='ForthSet' className='mt-4 bg-transparent  text-2xl border-b-2 border-gray-700 '>
            <option value="">Select UOM ID</option>
            <option value="WATCH">WATCH</option>
            <option value="BEG">BEG</option>
            <option value="DRESS">DRESS</option>
            <option value="SHOES">SHOES</option>
            <option value="WOMAN DRESS">WOMAN DRESS</option>

          </select>

        </div>

        <button type="submit" className=' mt-4 text-left w-24 h-8 bg-sky-600 rounded-md hover:shadow-blue-50 hover:shadow-sm hover:duration-300 '> Upload</button>
      </form>
    </div>
  )
}

export default SetHomePageData