import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Cart from './Components/Cart';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    {/* Add more routes as needed */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
