import React from 'react'
import{BrowserRouter, Route, Router, Router}from 'react-router-dom'
import Home from './pages/Home'
const app = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default app