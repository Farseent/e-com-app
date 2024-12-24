import React from 'react'
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Profile from '../pages/Profile';

const UserRouter =[
  {path:'/cart',element:<Cart/>},
  {path:'/checkout',element:<Checkout/>},
  {path:'/orders',element:<Orders/>},
  {path:'/profile',element:<Profile/>}
]

export default UserRouter;
