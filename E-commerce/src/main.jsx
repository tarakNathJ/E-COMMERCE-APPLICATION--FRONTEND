import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'

import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from 'redux-persist'
import {ToastContainer} from 'react-toastify'
import Router from './Router/Routers.jsx'


let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
   
      <PersistGate persistor={persistor}>
        <RouterProvider router = {Router}  />
        {/* <App /> */}
        <ToastContainer/>

      </PersistGate>
  
  
  </Provider>

)
