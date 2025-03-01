import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles/global.scss";
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { swiperDescription, swiperImages, swiperPrice, swiperThumbnails } from './config/data';
import { Topbar } from './components/Topbar';
import { Categories } from './components/Categories';
import { PopularProducts } from './components/PopularProduct';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ShopProduct } from './components/ShopProduct';
import { Checkout } from './components/Checkout';
function App() {
  return (
    <div className="App"> 
    <Topbar/>
    <Navbar/>      
      <Routes>
        <Route path="/" element={<><HeroBanner images={swiperImages} thumbnails={swiperThumbnails} description={swiperDescription} price={swiperPrice}/><Categories/>
      <PopularProducts/></>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/shop-product" element={<ShopProduct/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>                     
      
      <Footer/>
      
  
    </div>
  );
}

export default App;
