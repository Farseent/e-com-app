import { Routes,Route} from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import AdminRouter from './admin/AdminRouter';
import UserRouter from './user/UserRouter';

function App() {
  return (
    <UserProvider>
          <Routes>
            <Route path="/*" element = { <UserRouter/> } />
            <Route path="/admin*" element = { <AdminRouter/> } />
          </Routes>
   </UserProvider>
  );
}

export default App;
