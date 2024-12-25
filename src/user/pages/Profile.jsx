import React, { useEffect, useState } from "react";
import { getUserbyId } from "../../api/userApi";
import { useUser } from "../../context/UserContext";

const Profile = () => {
  const id = localStorage.getItem("userId");
  const [user, setUser] = useState();
  const { handleLogout } = useUser();

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

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600">Loading user information...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">Joined on {new Intl.DateTimeFormat("en-GB", {day: "2-digit",month: "2-digit",year: "numeric",}).format(new Date(user.joined))}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => alert("Edit Profile functionality coming soon!")}
            >
              Edit Profile
            </button>
            <button
              onClick={() => handleLogout()}
              className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span> {user.phone || "N/A"}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Address:</span> {user.address || "N/A"}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Date of Birth:</span>{" "}
              {user.dob || "N/A"}
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Account Information
            </h3>
            <p className="text-gray-600">
              <span className="font-semibold">Username:</span> {user.username || "N/A"}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Role:</span> {user.role || "N/A"}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Status:</span>{" "}
              {user.active ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
