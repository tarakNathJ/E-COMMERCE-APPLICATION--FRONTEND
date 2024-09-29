
import { Outlet } from 'react-router-dom'
import './App.css'
import NaveBer from './commponent/NaveBer'
import Fotter from './commponent/Fotter'

// import { Outlet } from 'react-router-dom'





function App() {



  return (
    <div className='  overflow-x-hidden lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full  mt-0 mx-0 left-0 right-0 flex gap-0 flex-col  '>
        <div className=' z-10 '>
        <NaveBer />
        </div>
      <div className='lg:w-full sm:w-full md:w-full md:h-full lg:h-full sm:h-full mt-[95px] z-0'>
        <Outlet />
      </div>
      <div className='lg:w-full sm:w-full md:w-full md:h-full lg:h-full sm:h-full mt-4'>
        <Fotter />
      </div>

    </div>

  )
}

export default App


