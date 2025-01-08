import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Feature from '../pages/Feature'
import Pricing from '../pages/Pricing'
import Blog from '../pages/Blog'
import Login from '../pages/Login'
import SignIn from '../pages/SignIn'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/feature" element={<Feature/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signin" element={<SignIn/>} />
    </Routes>
  )
}

export default AllRoutes
