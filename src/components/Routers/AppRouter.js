import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
// import components to show
import Register from '../Auth/Register';
import Login from '../Auth/Login';

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
            </Routes>

        </div>
    )
};

export default AppRouter;