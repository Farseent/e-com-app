import React, { useEffect, useState } from 'react'
import { getUserbyId } from '../../api/userApi';
import { useUser } from '../../context/UserContext';

 const Profile = () => {

  const id = localStorage.getItem("userId");
  const [user, setUser] = useState();
  const {handleLogout} = useUser();


  useEffect(() => { 
    const fetchUser = async () => {
      try {
        const response = await getUserbyId(id);
        setUser(response);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

    

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-white min-h-screen flex items-center justify-center px-4">
    {user && (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4">
      {/* Profile Header */}
      <div className="flex justify-center mb-6">
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="Profile" className="rounded-full w-24 h-24 object-cover" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Welcome {user.name}!</h2>
      
      {/* Profile Details */}
      <div className="mb-4">
        <label className="text-gray-600">Name</label>
        <p className="mt-1 text-gray-800">{user.name}</p>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Email</label>
        <p className="mt-1 text-gray-800">{user.email}</p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-6 flex-wrap">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors w-full sm:w-auto">Edit Profile</button>
        <button
          onClick={() => handleLogout()} 
          className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors w-full sm:w-auto">Log Out</button>
      </div>
    </div>
    )}
  </div>
  
  )
}
export default Profile;
