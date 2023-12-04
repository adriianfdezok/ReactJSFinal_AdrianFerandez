// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemDetails from './components/ItemDetails';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import MyCarts from './components/MyCarts';
import BlogsPost from './components/BlogsPost';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

import { CartProvider } from './components/ShopContext';

const App = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="*" element={<div className="fs-5 p-5 m-5 mt-5 text-center"> error al encontrar el producto 😭</div>} />
                        <Route path="/" element={<Home />} />
                        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                        <Route path="/product/:productoId" element={<ItemDetails />} />
                        <Route path="/mycarts" element={<MyCarts />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/MyCarts" element={<MyCarts />} />
                        <Route path="/BlogsPost" element={<BlogsPost />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </>
    );
};

export default App;
