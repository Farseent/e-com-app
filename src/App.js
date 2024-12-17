import { Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./user/pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetails from "./user/pages/ProductDetails";
import ProductList from "./user/pages/ProductList";
import Cart from "./user/pages/Cart";
import Checkout from "./user/pages/Checkout";
import Footer from "./components/Footer";
import Orders from './user/pages/Orders';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
     {/* <Router> */}
    
      <Navbar/>
      <Routes>
        <Route path="/" element = { <Home/> } />
        <Route path="/login" element = { <Login/> } />
        <Route path="/Signup" element = { <Signup/> } />
        <Route path="/products" element = { <ProductList/> } />
        <Route path="/product-details" element = { <ProductDetails/> } />
        <Route path="/cart" element = { <Cart/> } />
        <Route path="/checkout" element = { <Checkout/> } />
        <Route path="/orders" element = { <Orders/> } />
      </Routes>
      <Footer/>
    
     {/* </Router> */}
    </UserProvider>
  );
}

export default App;
