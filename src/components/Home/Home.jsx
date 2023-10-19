import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Home = () => {

    const hideHomeContent = location.pathname.includes('dashboard');

    return (
        <>
            {hideHomeContent ? <Outlet /> :
                <div>
                    <div className='text-center shadow-lg w-full m-4 px-8 pb-4 border-4 border-cyan-800 rounded-xl bg-cyan-700 mx-auto space-y-8'>
                        <h2 className='text-5xl text-center p-4 pb-0 text-white'>Overview</h2>
                        <p className='py-2 pt-0 text-white text-center'>This project is created for practicing React Router with JSON Placeholder.</p>
                        <div className="bg-cyan-950 h-1 mx-8 rounded-xl my-6"></div>
                        <details className='bg-cyan-950 text-white p-4 rounded-xl'>
                            <summary className='font-bold text-start'>See what I implemented in this project</summary>
                            <ol className='px-6 my-4 space-y-3'>
                                <li className='flex gap-4 items-center text-green-600'><AiOutlineCheckCircle />
                                    <span className='text-white'>Used Vite instead of Create React App.</span></li>
                                <li className='flex gap-4 items-center text-green-600'><AiOutlineCheckCircle />
                                    <span className='text-white'>Used React Router for page routing.</span></li>
                                <li className='flex gap-4 items-center text-green-600'><AiOutlineCheckCircle />
                                    <span className='text-white'>Used Tailwind CSS.</span></li>
                                <li className='flex gap-4 items-center text-green-600'><AiOutlineCheckCircle />
                                    <span className='text-white'>Used DaisyUI CSS framework.</span></li>
                                <li className='flex gap-4 items-center text-green-600'><AiOutlineCheckCircle />
                                    <span className='text-white'>Used useEffect function for fetching JSON Placeholder data.</span></li>

                            </ol>
                        </details>
                    </div>
                </div>
            }
        </>
    );
};

export default Home;