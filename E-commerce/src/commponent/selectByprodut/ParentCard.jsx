import React from 'react'
import ChildCard from './ChildCard'

function ParentCard({Responce}) {
    
  return (
    <div className=' w-[99.4%] h-[90%]  m-1'>
        
        <div className=' flex flex-wrap  w-full h-[90%] gap-4 justify-evenly items-center py-2  '>
            {
                Responce.map((data)=>(
                    <ChildCard key={data._id} data={data} />
                ))
            }
        </div>
    </div>
  )
}

export default ParentCard