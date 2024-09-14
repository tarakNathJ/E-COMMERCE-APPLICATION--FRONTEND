import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {BaseApi} from '../../../DataBase'


function ProductDetailes() {
    

    const datas = useSelector((store)=>store.Profile)
    const [error,setError] = useState(null);
    const [status ,setStatus] = useState(false);
    const [responce ,setResponce] = useState(null)
    

    const [FullFillError , setFullFillError ] = useState({})

    // to declear variable to store  data
    const [FromData, SetFromData] = useState({
        ProductName: '',
        VendorSUK: '',
        TypeOfColour: '',
        Size: '',
        SUK: '',
        UOM: '',
        SellingPrice: '',
        ListPrice: '',
        StorageLocation: '',
        ProductSeriesName: '',
        
    })

    const [ProductImage,setProductImage] = useState('');

    // data are insert on the store
    const OnChangeHandeler = (event) => {
        const { name, value } = event.target;
        SetFromData({
            ...FromData, [name]: value
        })
    }

    // data send backend
    const OnsubmitHandeler = async(e)=>{
        e.preventDefault();
        const ChackingVariable = {};
        

        if(!FromData.ProductName.trim()){
            ChackingVariable.ProductName = "enter your Product Name "
        }
        
        if(!FromData.VendorSUK.trim()){
            ChackingVariable.ProductName = "enter your VendorSUK Name "
        }
        
        if(!FromData.TypeOfColour.trim()){
            ChackingVariable.ProductName = "enter your product Colour Name "
        }
        
        if(!FromData.Size.trim()){
            ChackingVariable.Size = "enter your product Size "
        }
        
        if(!FromData.SUK.trim()){
            ChackingVariable.SUK = "enter your product SUK ID "
        }
        
        if(!FromData.UOM.trim()){
            ChackingVariable.UOM = "enter your product Size "
        }
        
        if(!FromData.SellingPrice){
            ChackingVariable.SellingPrice = "enter your product Selling Price"
        }
        
        if(!FromData.ListPrice){
            ChackingVariable.ListPrice = "enter your product List Price"
        }
        
        if(!FromData.StorageLocation.trim()){
            ChackingVariable.StorageLocation = "enter your Storage location"
        }
        
        if(!FromData.ProductSeriesName.trim()){
            ChackingVariable.ProductSeriesName = "enter your Product Series Name"
        }
       
        
        setFullFillError(ChackingVariable);
        if ( Object.keys(ChackingVariable).length === 0 ){
            await UploadProduct()
            alert("data are send");
        }
    }

    // call api to send data in backend

    const UploadProduct =async()=>{
        const controller = new  AbortController();
        const ImageData = new FormData()
        
        try{
            setStatus(false)
             ImageData.append('image',ProductImage);
             ImageData.append('ItmeName',FromData.ProductName);
             ImageData.append("Vendor_SUK",FromData.VendorSUK);
             ImageData.append('TypeColour',FromData.TypeOfColour);
             ImageData.append('Size',FromData.Size,);
             ImageData.append('SUK',FromData.SUK,);
             ImageData.append('UOM',FromData.UOM,);
             ImageData.append('PurchasePrice',FromData.SellingPrice);
             ImageData.append('ListPrice',FromData.ListPrice);
             ImageData.append('StorageLocation',FromData.StorageLocation);
             ImageData.append('ProductSericeName',FromData.ProductSeriesName);

            const responce =   await axios.post(`/Base/api/v1/productManager/Variant`,ImageData,{
                headers: {
                    // 'Content-Type': 'application/json'
                    Authorisation:`Bearer ${datas.data.token}`,
                    "Content-Type": "multipart/form-data",
                    "x-rapidapi-host": "file-upload8.p.rapidapi.com",
                    "x-rapidapi-key": "your-rapidapi-key-here"
                }
            },
            {
                signal: controller.signal
            })
            setResponce(responce);
            setStatus(false);

        }catch(error){
            setStatus(true);
            if(axios.isCancel(error)){
                console.log('request canceled',error.message);
                return 
            }

            setError(error)

        }
    }

   

    return (
        <div className='w-full h-full ml-8 text-left'>
            {/* brand creation section  */}
            <section className=' mt-0 pt-0'>
                <h1 className='text-3xl font-bold mt-8 '>PRODUCT INFORMATION</h1>
                <hr className=' border-black -ml-8 w-[90%] border-[1px] mt-3 ' />
                <div>
                    <form  onSubmit={OnsubmitHandeler} >
                        <div className='flex  items-center'>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-8 ml-12 rounded-md font-bold text-[27px]  '>Product Name</label>
                                <input type="text" name='ProductName' placeholder='Enter Product Name' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl uppercase  ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-8 ml-12 rounded-md font-bold text-[27px]  '>Vendor SUK</label>
                                <input type="text" name='VendorSUK' placeholder='Enter Vendor Suk' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  uppercase ' />
                            </div>
                        </div>
                        <div className='flex   items-center'>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Type Of Colour</label>
                                <input type="text" placeholder='Enter Colour type' name='TypeOfColour' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Size</label>
                                <input type="text" placeholder='Enter The Product Size' name='Size' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                            </div>
                        </div>

                        <div className='flex  items-center'>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>SUK</label>
                                <input type="text" placeholder='Enter product SUK ID' name='SUK' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>UOM</label>
                                <input type="text" placeholder='Enter product UOM ID' name='UOM' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  uppercase ' />
                            </div>
                        </div>
                        <div className='flex   items-center'>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Selling Price</label>
                                <input  type="number" placeholder='Enter product selling  price' name='SellingPrice' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>List Price</label>
                                <input  type="number"  placeholder='Enter product List  price' name='ListPrice' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                            </div>
                        </div>
                        <div className='flex  items-center'>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Storage Location</label>
                                <input type="text" placeholder='Enter storage location' name='StorageLocation' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Product Series Name</label>
                                <input type="text" placeholder='Enter Product Series Name' name='ProductSeriesName' onChange={OnChangeHandeler} className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl uppercase  ' />
                            </div>
                        </div>
                        <div className=' ml-6 w-[400px] h-16 pl-4 mt-6 flex gap-4   '>
                            <div className=' bg-gray-200 pl-4 '>
                                <label className=' text-xl font-semibold  text-UploadBlockColor ' > UPLOAD PRODUCT IMAGE</label>
                                <input type="file" onChange={(e)=>setProductImage(e.target.files[0])} name="ProductImage" className=' bg-transparent text-white' />
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

export default ProductDetailes