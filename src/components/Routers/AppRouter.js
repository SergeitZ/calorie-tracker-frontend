import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
// import components to show
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Athlete from '../Athletes/Athlete';
import Profile from '../Profile/Profile';

const AppRouter = () => {
    return (
        <div style={{width: "100%", flexDirection: "column"}}>
            {/* Any components taht should be always visible go here */}
            { /* NavBar */}
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/athlete" element={<Athlete/>}/>
                <Route path="/athletes/:athId" element={<Profile />} />
            </Routes>

        </div>
    )
};

export default AppRouter;