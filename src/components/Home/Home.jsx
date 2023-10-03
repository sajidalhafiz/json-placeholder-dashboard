import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav className='bg-cyan-800 p-4 text-center'>
                <h2 className='text-5xl text-white'>JSON Placeholder Dashboard</h2>
            </nav>
            <Outlet />
        </div>
    );
};

export default Home;