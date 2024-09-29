import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';


function BrandDetailes() {
    // *********************User detailes ***************
    const datas = useSelector((store)=>store.Profile)
    
    // console.log(datas.data.token);
    // **************************Brand Creation ************
    const [BrandError , setBrandError] = useState(null);
    const [BrandStatus,SetBrandStatus] = useState(false);
    const [BransResponce , setBrandResponce] = useState(null);
    // **************************Serice Creation ************
    const [SericeError , setSericeError] = useState(null);
    const [SericeStatus,SetSericeStatus] = useState(false);
    const [SericeResponce , setSericeResponce] = useState(null);
    // *********************************** Catalog ************
    const [CatalogError , setCatalogError] = useState(null);
    const [CatalogStatus,SetCatalogStatus] = useState(false);
    const [CatalogResponce , setCatalogResponce] = useState(null);
   

    //********************** * brand creation : define state ***************
    const [fromDataBrandCreation , SetfromDataBrandCreation ] = useState({
        BrandName:'',
        Brandarecreate:'',
        BrandLogo:''

    })
    const [BrandImage ,SetImage] = useState('');
    // ***************************** Serice creation : define state ****************************
    

    const [fromDataSerice ,SetFromDataSerice]=useState({SericeName:''})

    // ***************************** Catalog creation : define state***********************

    const [fromCatelog ,SetFromCatelog] = useState({CatalogName:''})
    const [CatalogImage ,SetCatalogImage] = useState('');
    // **********************************************



     //************************ */  Brand creation *****************
    const OnchangeHandeler = (event)=>{
        const {name ,value} = event.target;
        SetfromDataBrandCreation({
            ...fromDataBrandCreation,[name]:value
        })

    }

   
    // onsubmit handler to work chack: required fild are fillup or not 
    const OnsubmitHandeler =async (event)=>{
        
        event.preventDefault();
        const ChackAllFildes ={};
        if(!fromDataBrandCreation.BrandName.trim()){
            ChackAllFildes.BrandName = "Brand Name are Required"
        }
        if(!fromDataBrandCreation.Brandarecreate.trim()){
            ChackAllFildes.Brandarecreate = "Brand creation  date are Required"
        }
        

        // if all filled are full then Call API..
        if(Object.keys(ChackAllFildes).length === 0){

            await ApiCallBrandCreation();
            alert("data send");
            

        }

    }

    // api call for brand creation
    const ApiCallBrandCreation =async()=>{
        const controller =new  AbortController();
        
        try{
            SetBrandStatus(false);
            let BrandLogoImage = new FormData()
            BrandLogoImage.append('image',BrandImage);
            BrandLogoImage.append('CreatedOn',fromDataBrandCreation.Brandarecreate);
            BrandLogoImage.append('Brand',fromDataBrandCreation.BrandName)

           
            const responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/productManager/Product`,BrandLogoImage,{
                headers: {
                    // 'content-type': 'application/json',
                    Authorisation:`Bearer ${datas.data.token}`,
                    "Content-Type": "multipart/form-data",
                    "x-rapidapi-host": "file-upload8.p.rapidapi.com",
                    "x-rapidapi-key": "your-rapidapi-key-here",
                  
                }
            },
            {
                signal: controller.signal
            })
            SetBrandStatus(true);
            setBrandResponce(responce);

        }catch(error){
            if(axios.isCancel(error)){
                console.log('request canceled',error.message);
                return 
            }
            if(axios.isAxiosError(error)){
                console.log(error);
                return
                
            }

            SetBrandStatus(true);
            setBrandError(error);
        }

    }
    

    // ************************************ serice creation  handeler ******************
    const ChangeSericeHandeler = (event)=>{
        const {name ,value} = event.target;
        SetFromDataSerice({
            ...fromDataSerice ,[name]:value
        })

    }

    // chack form are full fill or not
    const OnSericeCreation =async(event)=>{
        event.preventDefault();
        const ChackFilds = {}
        if(!fromDataSerice.SericeName.trim()){
            ChackFilds.SericeName = "Serice name are required"
        }
        if(Object.keys(ChackFilds).length === 0 ){
            await SericeCreateAPICall();
            alert("DATA SEND ")
        }

    }

    // create brand serice : api call 
    const SericeCreateAPICall =async()=>{
        const controller = new AbortController();
        try{
            SetSericeStatus(false);
            const Responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/productManager/Serice`,{
                SericeName:fromDataSerice.SericeName
            },{
                headers:{
                    'Content-Type':'application/json',
                    Authorisation:`Bearer ${datas.data.token}`,
                }
            },{
                signal:controller.signal
            }) 

            SetSericeStatus(true);
            setSericeResponce(Responce);


        }catch(error){
            if(axios.isCancel(error)){
                console.log("request canceled",error.message)
                return
            }
            if(axios.isAxiosError(error)){
                setSericeError(error)
                console.log(error);
                return 
            }

        }

    }

    // ******************************* Catalog creation handeler **********************
    const ChangeCatalogHangeler = (event)=>{
        const {name ,value} = event.target;
        SetFromCatelog({
            ...fromCatelog ,[name]:value
        })
    }

    // chacking all filled are full fill or not 
    const CatalogSubmitHandeler = async(event)=>{
        event.preventDefault();
        const ChackFullFiled = {}
        if(!fromCatelog.CatalogName.trim()){
            ChackFullFiled.CatalogName = "Catalog Name are required "
        }
        
      
  
        if(Object.keys(ChackFullFiled).length === 0){
            console.log("call");
            await CatalogCreatAPIcll();
            alert("data send");
        }

    }

    // creat catalog api called
    const CatalogCreatAPIcll =async ()=>{
        const controller = new AbortController();
        const CateLogImage =  new FormData()
        CateLogImage.append('image',CatalogImage);
        CateLogImage.append('CatalogName',fromCatelog.CatalogName)
        try{
            SetCatalogStatus(false)
            
            const responce = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/productManager//Catlog`,CateLogImage,{
                headers:{
                    // 'Content-Type': 'application/json'
                    Authorisation:`Bearer ${datas.data.token}`,
                    "Content-Type": "multipart/form-data",
                    "x-rapidapi-host": "file-upload8.p.rapidapi.com",
                    "x-rapidapi-key": "your-rapidapi-key-here"
                }
            },{
                signal:controller.signal 
            })
            SetCatalogStatus(true);
            setCatalogResponce(responce);

        }catch(error){
            SetCatalogStatus(true);
            if(axios.isCancel(error)){
                console.log(error);
                return
            }
            if(axios.isAxiosError(error)){
                console.log(error);
                setCatalogError(error);
                return
            }
            
        }
    }
    

    return (
        <div className='w-full h-full ml-8 text-left'>
            {/* brand creation section  */}
            <section className=' mt-0 pt-0'>
                <h1 className='text-3xl font-bold mt-8 '>BRAND INFORMATION</h1>
                <hr className=' border-black -ml-8 w-[90%] border-[1px] mt-3 ' />
                <div>
                    <form  onSubmit={OnsubmitHandeler} >
                        <div className='flex flex-col'>
                            <label className='w-[350px] h-12 mt-8 ml-12 rounded-md font-bold text-[27px]  '>Brand Name</label>
                            <input type="text" onChange={OnchangeHandeler} placeholder='Enter Brand Name' required name='BrandName' className='w-[350px] h-12 uppercase -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='w-[350px] h-12 mt-4 ml-12 rounded-md font-bold text-[27px]  '>Brand are create</label>
                            <input type="text" onChange={OnchangeHandeler} placeholder='creation date of the Brand' required name='Brandarecreate' className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  ' />
                        </div>
                        <div className=' ml-6 w-[400px] h-16 pl-4 mt-6 flex gap-4   '>
                            <div className=' bg-gray-200 pl-4 '>
                                <label className=' text-xl font-semibold  text-UploadBlockColor ' > UPLOAD BRAND LOGO</label>
                                <input type="file" onChange={(e)=>SetImage(e.target.files[0])} name="BrandLogo" required className=' bg-transparent  text-white' />
                            </div>
                            <div className=''>
                                <button type="submit" className=' text-xl h-10 w-[130px] bg-blue-500 mt-4 rounded-md  hover:underline   ease-in '>UPLOAD</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>

       {/*  brand serice creation  section */}
            <section className='mt-8 pt-4 h-[400px] '>
                <h1 className='text-3xl font-bold mt-8 '>BRAND SERIES</h1>
                <hr className=' border-black -ml-8 w-[90%] border-[1px] mt-3 ' />
                <div>
                    <form onSubmit={OnSericeCreation}>
                        <div className=' ml-6 w-[400px] h-16  mt-6  flex gap-4 items-center '>
                            <div className='flex flex-col mt-[80px]'>
                                <label className='w-[350px]   rounded-md font-bold text-[27px]  '>Serice Name</label>
                                <input type="text" onChange={ChangeSericeHandeler} required placeholder='Enter Serice Name' name='SericeName' className='w-[350px] h-12 uppercase  pl-4 rounded-md text-2xl  ' />
                            </div>
                            <div className='mt-[300px] -ml-12'>
                                <button type="submit" className=' text-xl h-10 w-[130px] bg-blue-500 mt-4  rounded-md  hover:underline '>UPLOAD</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>

            {/* brand catelog creation  */}
            <section className=' mt-0 pt-0'>
                <h1 className='text-3xl font-bold mt-8 '>BRAND CATALOG</h1>
                <hr className=' border-black -ml-8 w-[90%] border-[1px] mt-3 ' />
                <div>
                    <form onSubmit={CatalogSubmitHandeler}>
                        <div className='flex flex-col'>
                            <label className='w-[350px] h-12 mt-8 ml-12 rounded-md font-bold text-[27px]  '>Catalog Name</label>
                            <input type="text"  required  onChange={ChangeCatalogHangeler} name='CatalogName' placeholder='Enter Catalog Name' className='w-[350px] h-12 -mt-2 ml-12 pl-4 rounded-md text-2xl  uppercase ' />
                        </div>
                        
                        <div className=' ml-6 w-[400px] h-16 pl-4 mt-6 flex gap-4   '>
                            <div className=' bg-gray-200 pl-4 '>
                                <label className=' text-xl font-semibold  text-UploadBlockColor ' > UPLOAD CATALOG IMAGE</label>
                                <input type="file"   required  onChange={(e)=>SetCatalogImage(e.target.files[0])} name="CATALOGIMAGE" className=' bg-transparent text-white' />
                            </div>
                            <div className=''>
                                <button type="submit"   className=' text-xl h-10 w-[130px] bg-blue-500 mt-4 rounded-md  hover:underline   ease-in '>UPLOAD</button>
                            </div>
                        </div>
                     
                    </form>
                </div>
            </section>


        </div>
    )
}

export default BrandDetailes