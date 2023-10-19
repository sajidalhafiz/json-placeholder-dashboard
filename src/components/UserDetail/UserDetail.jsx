import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { FaPenToSquare, FaArrowLeft } from "react-icons/fa6";
import profileImg from '../../assets/profileIgm.jpg'

const UserDetail = () => {
    const userInfo = useLoaderData();
    // console.log(userInfo)
    const { id, name, email, website, phone, username, company, address } = userInfo;

    console.log(address, company)

    return (
        <>
            <nav className='bg-cyan-800 p-4 text-center'>
                <h2 className='text-5xl text-white'>Profile Update</h2>
            </nav>
            <div className='text-slate-300 text-lg grid grid-cols-3 gap-8 items-start bg-cyan-800 p-10 pt-16 mx-auto mt-6 rounded-2xl w-8/12 relative'>
                <button className='absolute top-5 end-10 flex items-center border-2 gap-2 hover:text-cyan-400 duration-500 active:text-cyan-500 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm'>
                    <FaPenToSquare />
                    <Link to={`/profileEdit`}>Edit</Link>
                </button>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className="avatar">
                        <div className="w-40 mask mask-squircle">
                            <img src={profileImg} />
                        </div>
                    </div>
                    <button className='bg-cyan-600 hover:bg-cyan-500 duration-500 active:bg-cyan-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm'>
                        <Link to={`/userDetail/${id}`}>Upload Image</Link>
                    </button>
                </div>
                <div className='space-y-3'>
                    <p>Personal: </p>
                    <p className='bg-cyan-900 py-2 px-4 rounded-xl'>ID: {id}</p>
                    <p className='bg-cyan-900 py-2 px-4 rounded-xl'>Username: {username}</p>
                    <p className='bg-cyan-900 py-2 px-4 rounded-xl'>Name: {name}</p>
                    <p className='bg-cyan-900 py-2 px-4 rounded-xl'>Email: {email}</p>
                </div>
                <div className='space-y-3'>
                    <p>Address: </p>
                    <ul className='space-y-3'>
                        <li className='bg-cyan-900 py-2 px-4 rounded-xl'>City: {address.city}</li>
                        <li className='bg-cyan-900 py-2 px-4 rounded-xl'>Street: {address.street}</li>
                        <li className='bg-cyan-900 py-2 px-4 rounded-xl'>ZipCode: {address.zipcode}</li>
                    </ul>
                </div>
                <div className='space-y-3'>
                </div>
                <div className='space-y-3'>
                    <p>Company: </p>
                    <ul className='space-y-3'>
                        <li className='bg-cyan-900 py-2 px-4 rounded-xl'>Name: {company.name}</li>
                        <li className='bg-cyan-900 py-2 px-4 rounded-xl'>{company.catchPhrase}</li>
                        <li className='bg-cyan-900 py-2 px-4 rounded-xl'>{phone}</li>
                    </ul>
                </div>
                <div className='space-y-3'>
                    <p>Portfolio: </p>
                    <p className='bg-cyan-900 py-2 px-4 rounded-xl'>Website: {website}</p>
                </div>
                <div></div>
                <div className='space-x-6 mt-20 flex justify-center'>
                    {/* <button className='bg-slate-600 hover:bg-slate-500 duration-500 active:bg-slate-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm'>
                        <Link to={`/userDetail/${id}`}>Cancel</Link>
                    </button> */}
                    <button className='flex gap-2 items-center bg-cyan-600 hover:bg-cyan-500 duration-500 active:bg-cyan-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-md'>
                        <FaArrowLeft />
                        <Link to='/users'>Back</Link>
                    </button>
                </div>
                <div></div>
            </div>

        </>
    );
};

export default UserDetail;
