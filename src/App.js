import { Routes,Route, useLocation} from 'react-router-dom';
import UserRouter from './user/routes/UserRouter';
import AdminRouter from './admin/routes/AdminRouter';
import Home from './user/pages/Home';
import Login from './auth/pages/Login';
import Signup from './auth/pages/Signup';
import ProductDetails from './user/pages/ProductDetails';
import UserProtectedRoutes from './user/routes/UserProtectedRoutes';
import AdminProtectedRoutes from './admin/routes/AdminProtectedRoutes';
import AdminSidebar from './admin/pages/AdminSidebar';
import Navbar from './components/Navbar';
import { Notfound } from './components/Notfound';

function App() {
  // const location = useLocation;
  // const isAdmin = AdminRouter.some(route => location.pathname.startsWith(route.path));
  return (
    <div>
      {/* {isAdmin ? <AdminSidebar/> : <Navbar/>} */}
      <Navbar/>
        <Routes>
          <Route path="/" element = { <Home/> } />
          <Route path="/login" element = { <Login/> } />
          <Route path="/Signup" element = { <Signup/> } />
          <Route path="/product-details/:id" element = { <ProductDetails/> } />
          <Route element={<UserProtectedRoutes/>}>
              {UserRouter.map(({path,element},index)=>(
                <Route key={index} path={path} element={element}/>
              ))}
            </Route>
            <Route element={<AdminProtectedRoutes/>}>
              {AdminRouter.map(({path,element},index)=>(
                <Route key={index} path={path} element={element}/>
              ))}
            </Route>
            <Route path='*' element={<Notfound/>} />
        </Routes>
      </div>
  );
}

export default App;
