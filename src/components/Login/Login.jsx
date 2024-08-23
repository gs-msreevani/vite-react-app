// Login.jsx
import React, { useState } from 'react';
import {useAuth} from "../../AuthContext";
import {useNavigate} from "react-router-dom";
import "./Login.css";
const Login = () => {
    // State to store form field values
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        accountName: ''
    });
    const navigate = useNavigate();
    const { isLoggedIn,login } = useAuth();

    // Handler for input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        login();
        // For now, just log the form data to the console
        console.log('Form Data:', formData);
        //passing user and account objects:
        if(window.aptrinsic){
            aptrinsic("identify",
                {
                    //User Fields
                    "id": formData.email, // Required for logged in app users
                    "email": formData.email,
                    "firstName": formData.username,
                    "lastName": formData.username[0],
                    "signUpDate": new Date(),
                },
                {
                    //Account Fields
                    "id":formData.accountName, //Required
                    "name":formData.accountName
                });

        }
    };
  if(isLoggedIn){
      // Navigate to the root path
      navigate('/');
      return null;
  }
  return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="accountName">Account Name:</label>
                <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
