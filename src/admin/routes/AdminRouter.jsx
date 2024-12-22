import React from 'react'
import Dashboard from '../pages/Dashboard';
import ManageProducts from '../pages/ManageProducts';
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';
import Reports from '../pages/Reports';

//  const AdminRouter = () => {
//   return (
//     <div >
//         <AdminSidebar/>
//         <div className="ml-64 flex-grow p-6 bg-gray-100 min-h-screen" >
//         <Routes>
//             <Route path="/admin" element = { <Dashboard/> } />
//             <Route path="/admin/manageproduct" element = { <ManageProducts/> } />
//             <Route path="/admin/manageorders" element = { <ManageOrders/> } />
//             <Route path="/admin/manageusers" element = { <ManageUsers/> } />
//             <Route path="/admin/reports" element = { <Reports/> } />
//         </Routes>
//         </div>
//     </div>
//   );
// }

const AdminRouter = [
  {path:'/admin', element:<Dashboard/>},
  {path:'/admin/manageproduct', element:<ManageProducts/>},
  {path:'/admin/manageorders', element:<ManageOrders/>},
  {path:'/admin/manageusers', element:<ManageUsers/>},
  {path:'/admin/reports', element:<Reports/>}
]

export default AdminRouter;