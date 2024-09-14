import { useEffect, useState } from 'react';
import React from 'react'
import Itme from './Itme';
import { Link } from 'react-router-dom';

function Card({Data}) {
  
  
  const [products ,setProduct] = useState([]);
  const [status, setStatus] = useState(false);
  const [Error ,setError] = useState(null);
 



 if(status){
  return <h1>server loding ...</h1>
 }
  return (
    <div className='w-[300px]  h-[450px]  my-[12px] bg-bg-Cart  '>
      <div className='w-[300px] h-[50px] bg-slate-500 items-center  font-bold  text-[20px] '>
            <h3 className=' pt-2 '>Up to 60% off | Styles for men</h3>
      </div>
      <div className='flex flex-wrap justify-evenly gap-0'>
        {
          Data.map((data) => {
            return (
              <Itme key={data.id} data={data} />
            );
          })
        }
      </div>
      <div className='w-[300px] h-[30px] mt-1 bg-slate-500  text-right '>
        <p className=' pr-3 ' ><Link to={'/product'} >See more</Link>  </p>
      </div>

    </div>
  )
}

export default Card;
