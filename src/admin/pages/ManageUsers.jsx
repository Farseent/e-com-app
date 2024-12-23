import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../api/adminApi';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [userForm, setUserForm] = useState({ id: '', name: '', email: '', role: '', status: '' });

    useEffect(() => {
        getAllUsers().then((res) => setUsers(res.data));
    }, []);
//
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
            {/* User Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">User List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Role</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-t">
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.role}</td>
                                <td className="px-4 py-2">
                                    <button /*/ onClick={() => handleEditUser(user.id)}*/className="bg-blue-600 text-white p-2 rounded-md mr-2">Block</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;