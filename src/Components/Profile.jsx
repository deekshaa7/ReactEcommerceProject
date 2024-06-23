import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../UserContext";

const Profile = () => {
    const { user, logout } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="bg-white max-w-lg mx-auto p-8 border rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name:</label>
                    <p className="text-gray-900">{user.name}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email:</label>
                    <p className="text-gray-900">{user.email}</p>
                </div>
                <button className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
