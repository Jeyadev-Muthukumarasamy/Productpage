import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from '../Components/landing'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import BuyNow from '../BuyNow/BuyNow'
import Footer from '../Footer/footer'


function App() {


  return (
    <>
          <div className="app-container">

   
    <Routes>
    <Route path="/" element={<Landing />} />
      
    {/* <Route path="/product/:id" element={<BuyNow />} /> */}
    <Route path="/buynow/:id" element={<BuyNow />} />
    

    </Routes>
    </div>
      
        
    </>
  )
}

export default App
