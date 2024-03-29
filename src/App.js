import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Token from './Components/Token/Token'
import Roadmap from './Components/Roadmap/Roadmap'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Home/>
     <About/>
    <Token/>
 <Roadmap/>
    <Footer/> 
    </>
  )
}

export default App
