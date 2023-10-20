import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import profileImg from '../../assets/profileIgm.jpg'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Your changes is saved !');

const ProfileEdit = () => {
    const userInfo = useLoaderData();
    // console.log(userInfo)
    const { id, name, email, website, phone, username, company, address } = userInfo;
    return (
        <div>
            <div className='text-slate-300 text-lg grid grid-cols-3 gap-8 items-start bg-cyan-800 p-10 pt-16 mx-auto mt-6 rounded-2xl w-8/12 relative'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className="avatar">
                        <div className="w-40 mask mask-squircle">
                            <img src={profileImg} />
                        </div>
                    </div>
                    <button className='bg-cyan-600 hover:bg-cyan-500 duration-500 active:bg-cyan-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm'>
                        Upload Image
                    </button>
                </div>
                <div className='space-y-3'>
                    <p>Personal: </p>
                    <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`ID: ${id}`} />
                    <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`Username: ${username}`} />
                    <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`Name: ${name}`} />
                    <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`Email: ${email}`} />
                </div>
                <div className='space-y-3'>
                    <p>Address: </p>
                    <ul className='space-y-3'>
                        <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`City: ${address.city}`} />
                        <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`Street: ${address.street}`} />
                        <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`ZipCode: ${address.zipcode}`} />
                    </ul>
                </div>
                <div className='space-y-3'>
                </div>
                <div className='space-y-3'>
                    <p>Company: </p>
                    <ul className='space-y-3'>
                        <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`Name: ${company.name}`} />
                        <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`${company.catchPhrase}`} />
                        <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`${phone}`} />
                    </ul>
                </div>
                <div className='space-y-3'>
                    <p>Portfolio: </p>
                    <input type='text' className='bg-cyan-900 py-2 px-4 rounded-xl outline-none border border-cyan-600 shadow-lg placeholder:text-white' placeholder={`Website: ${website}`} />
                </div>
                <div></div>
                <div className='space-x-6 mt-20 flex justify-center'>
                    <button onClick={() => window.history.back()} className='bg-slate-600 hover:bg-slate-500 duration-500 active:bg-slate-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-md'>
                        Cancel
                    </button>
                    <button onClick={notify} className='flex gap-2 items-center bg-cyan-600 hover:bg-cyan-500 duration-500 active:bg-cyan-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase text-md'>
                        <FaCheck/>
                        Save
                    </button>
                    <Toaster/>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ProfileEdit;