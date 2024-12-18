import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import ManageOrders from './pages/ManageOrders';
import ManageUsers from './pages/ManageUsers';
import AdminNavbar from './pages/AdminNavbar';

 const AdminRouter = () => {
  return (
    <div >
        <AdminNavbar/>
        <div >
        <Routes>
            <Route path="/" element = { <Dashboard/> } />
            <Route path="/manageproduct" element = { <ManageProducts/> } />
            <Route path="/manageorders" element = { <ManageOrders/> } />
            <Route path="/manageusers" element = { <ManageUsers/> } />
        </Routes>
        </div>
    </div>
  );
}

export default AdminRouter;