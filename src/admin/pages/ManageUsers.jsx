import React, { useState, useEffect } from 'react';

// Mock API calls for demonstration purposes
const fetchUsers = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User', status: 'Active' },
                { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin', status: 'Inactive' },
                { id: 3, name: 'Sam Brown', email: 'sam.brown@example.com', role: 'User', status: 'Active' },
            ]);
        }, 1000);
    });
};

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [userForm, setUserForm] = useState({ id: '', name: '', email: '', role: '', status: '' });

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUsers().then(fetchedUsers => {
            setUsers(fetchedUsers);
        });
    }, []);

    const handleEditUser = (id) => {
        const user = users.find(u => u.id === id);
        setUserForm(user);
    };

    const handleUpdateUser = () => {
        const updatedUsers = users.map(user =>
            user.id === userForm.id ? { ...user, ...userForm } : user
        );
        setUsers(updatedUsers);
        setUserForm({ id: '', name: '', email: '', role: '', status: '' }); // Reset the form
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

            {/* Edit User Form */}
            <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        className="p-2 border rounded-md"
                        placeholder="Name"
                        value={userForm.name}
                        onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                    />
                    <input
                        type="email"
                        className="p-2 border rounded-md"
                        placeholder="Email"
                        value={userForm.email}
                        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                    />
                    <select
                        className="p-2 border rounded-md"
                        value={userForm.role}
                        onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                    >
                        <option value="">Select Role</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <select
                        className="p-2 border rounded-md"
                        value={userForm.status}
                        onChange={(e) => setUserForm({ ...userForm, status: e.target.value })}
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button
                    onClick={handleUpdateUser}
                    className="mt-4 bg-blue-600 text-white p-2 rounded-md"
                >
                    Update User
                </button>
            </div>

            {/* User Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">User List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Role</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-t">
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.role}</td>
                                <td className="px-4 py-2">{user.status}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleEditUser(user.id)}
                                        className="bg-blue-600 text-white p-2 rounded-md mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="bg-red-600 text-white p-2 rounded-md"
                                    >
                                        Delete
                                    </button>
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