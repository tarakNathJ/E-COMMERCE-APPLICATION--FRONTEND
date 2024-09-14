import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';


function SearchingProductPage() {
    const [data, setData] = useState([]);
    const [leading, SetLoding] = useState(false);
    const [error, SetError] = useState(false)
    const SectionData = sessionStorage.getItem("searching");
    useEffect(() => {
        
        setData(JSON.parse(SectionData));
        // window.location.reload();
    }, [true])
 

    return (
        <div className='  w-full h-full justify-center bg-showAllProduct  flex overflow-x-hidden p-4 '>

            <div className=' w-[90%] h-full flex flex-col   flex-wrap gap-2  pl-4  justify-center '>
                <div className='  flex h-12 w-full bg-priceBer rounded-md justify-evenly items-center text-xl  font-medium '>
                    <div className=''>Sort By</div>
                    <div className=''>Popularity</div>
                    <div className=''>Price - low to high</div>
                    <div className=''>Price - high to low</div>
                    <div className=' '>Newest First</div>
                </div >
                <div className=' flex  justify-evenly flex-wrap gap-4 pt-3  '>
                    {
                        data.map((data) => (
                            <SingleProduct key={data._id} data={data} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchingProductPage;
