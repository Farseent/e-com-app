import React from 'react'
import Dashboard from '../pages/Dashboard';
import ManageProducts from '../pages/ManageProducts';
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';
import Reports from '../pages/Reports';
import { AddProducts } from '../pages/AddProducts';
import { EditProduct } from '../pages/EditProduct';

const AdminRouter = [
  {path:'/admin', element:<Dashboard/>},
  {path:'/admin/manageproduct', element:<ManageProducts/>},
  {path:'/admin/manageorders', element:<ManageOrders/>},
  {path:'/admin/manageusers', element:<ManageUsers/>},
  {path:'/admin/reports', element:<Reports/>},
  {path:'/admin/addproduct', element:<AddProducts/>},
  {path:'/admin/editproduct/:id', element:<EditProduct/>}
]

export default AdminRouter;