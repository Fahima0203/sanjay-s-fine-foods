import React from 'react'
import Gift from './components/Gift'
import Home from './components/HomePage/Home'
import Product from './components/Product'

import Login from './components/Login'
import Signuppage from './components/Signuppage'

import Navigation from './components/Navigation'
import Navigation2 from './components/Navigation2'
import AddProduct from './components/AddProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AnchorLink from "react-anchor-link-smooth-scroll";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Navigation2 />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        {/* <Route path='#course'><button>Courses</button></Route>
      <Route path='#article'><button>Articles</button></Route> */}
        {/* <AnchorLink href='#course'><button>Courses</button></AnchorLink>
      <AnchorLink href='#article'><button>Articles</button></AnchorLink> */}
        <Route path="product" element={<Product/>} ></Route>
        <Route path="gifts" element={<Gift />} ></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signuppage/>}></Route>
        <Route path='addProduct' element={<AddProduct/>}></Route>
        <Route path="*" elemetn={<Home />}></Route>

      </Routes>

    </BrowserRouter>
  )
}

