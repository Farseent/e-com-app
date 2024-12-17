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
          </Routes>
        </div>
      <Footer/>
    </div>
    </UserProvider>
  );
}

export default App;
