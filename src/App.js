import { Routes,Route} from 'react-router-dom';
import UserRouter from './user/routes/UserRouter';
import AdminRouter from './admin/routes/AdminRouter';

function App() {
  return (
      <Routes>
        <Route path="/*" element = { <UserRouter/> } />
        <Route path="/admin*" element = { <AdminRouter/> } />
      </Routes>
  );
}

export default App;
