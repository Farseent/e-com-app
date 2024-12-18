import { Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./user/pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetails from "./user/pages/ProductDetails";
import Cart from "./user/pages/Cart";
import Checkout from "./user/pages/Checkout";
import Footer from "./components/Footer";
import Orders from './user/pages/Orders';
import { UserProvider } from './context/UserContext';
import Dashboard from './admin/pages/Dashboard';
import ManageProducts from './admin/pages/ManageProducts';
// import AddProduct from './admin/pages/AddProduct';
import ManageOrders from './admin/pages/ManageOrders';
import ManageUsers from './admin/pages/ManageUsers';

function App() {
  return (
    <UserProvider>
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
            <Route path="/admin" element = { <Dashboard/> } />
            <Route path="/admin/manageproduct" element = { <ManageProducts/> } />
            <Route path="/admin/manageorders" element = { <ManageOrders/> } />
            <Route path="/admin/manageusers" element = { <ManageUsers/> } />
          </Routes>
        </div>
      <Footer/>
    </div>
   </UserProvider>
  );
}

export default App;
