import React from 'react'

function Language() {
  return (
    <div className=' pt-10 w-full h-full overflow-x-hidden overflow-y-auto bg-slate-100  text-left pl-36   '>
        <h3 className=' text-3xl font-bold  '>Language setting </h3>
        
        <form action="" className=' text-xl '>
        <p> select the language your prefer for browsing ,shopping and communication </p>
        <br />
        <input type="radio" name="Language" id="" value={'Englich'} />
        <label for="Englich" >   Englich - EN</label><br />
        <hr className=' border border-black w-[300px] ' /><br />
        <input type="radio" name="Language" id="" value={'Hindi'}/>
        <label for="Hindi">   Hindi - HI</label><br />
        <input type="radio" name="Language" id="" value={'Canada'}/>
        <label for="Canada">   Canada KN</label><br />
        <input type="radio" name="Language" id="" value={'Turkiye'}/>
        <label for="Turkiye">   Turkiye - TA</label><br />
        <input type="radio" name="Language" id="" value={'Bangali'}/>
        <label for="Bangali">   Bangali -BN</label><br /><br />
        <hr className='border border-black  w-[700px] ' />
        <div className='py-8 flex  gap-24 '>
        <button type="text" className=' border-2 text-2xl px-4 py-1 bg-slate-300 rounded-lg'  >Cancel </button>
        <button type="submit"  className=' border-2 text-2xl px-4 py-1  bg-yellow-500  rounded-lg  '>Save Change</button>
        </div>
        
        </form>

    </div>
  )
}

export default Language