import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import ManageOrders from './pages/ManageOrders';
import ManageUsers from './pages/ManageUsers';
import AdminNavbar from './pages/AdminNavbar';
import Reports from './pages/Reports';

 const AdminRouter = () => {
  return (
    <div >
        <AdminNavbar/>
        <div className="ml-64 flex-grow p-6 bg-gray-100 min-h-screen" >
        <Routes>
            <Route path="/" element = { <Dashboard/> } />
            <Route path="/manageproduct" element = { <ManageProducts/> } />
            <Route path="/manageorders" element = { <ManageOrders/> } />
            <Route path="/manageusers" element = { <ManageUsers/> } />
            <Route path="/reports" element = { <Reports/> } />
        </Routes>
        </div>
    </div>
  );
}

export default AdminRouter;