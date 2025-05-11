import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coin/:coinId" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App