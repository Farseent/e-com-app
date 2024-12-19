import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../../auth/pages/Login';
import Signup from '../../auth/pages/Signup';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const UserRouter = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element = { <Home/> } />
                    <Route path="/login" element = { <Login/> } />
                    <Route path="/Signup" element = { <Signup/> } />
                    <Route path="/product-details/:id" element = { <ProductDetails/> } />
                    <Route path="/cart" element = { <Cart/> } />
                    <Route path="/checkout" element = { <Checkout/> } />
                    <Route path="/orders" element = { <Orders/> } />
                </Routes>
            </div>
      <Footer/>
    </div>
  )
}
export default UserRouter;
