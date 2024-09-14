import React from 'react'


function Itme({data}) {
 
  return (
    <div className='w-[140px] h-[180px] mt-1 bg-slate-50  '>
      <div className=' w-full h-[90%] '><img className='w-full h-[89%] object-cover overflow-hidden leading-loose' src={data.ItmeImage} alt="" /></div>
      <div className=' w-full  h-[10%] -mt-4   '>{`${(data.ItmeName).slice(0,10)}...`}</div>
    </div>
  )
}

export default Itme
