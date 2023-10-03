import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GlobeAmericasIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const UserDetail = () => {
    const userInfo = useLoaderData();
    console.log(userInfo)
    const { id, name, email, website, phone } = userInfo;
    return (
        <div className='flex h-screen'>
            <div className='bg-cyan-800 basis-1/4 flex flex-col justify-between'>
                <div>
                    <div className='m-4 p-4 bg-cyan-600 rounded-xl'>
                        <h2 className='text-3xl text-white font-bold flex justify-between'>
                            <span className='px-3'>{name}</span>
                            <span className='bg-cyan-800 mx-3 py-1 px-3 rounded-md text-2xl'>{id}</span>
                        </h2>
                    </div>
                    <div className='text-2xl text-white flex flex-col gap-4 items-start m-4 py-6 px-4 bg-cyan-900 divide-y divide-cyan-700 rounded-lg'>
                        <button className='w-full p-2 hover:bg-cyan-700'>link todo</button>
                        <button className='w-full p-2 hover:bg-cyan-700'>link posts</button>
                        <button className='w-full p-2 hover:bg-cyan-700'>link album</button>
                    </div>
                </div>
                <div className='text-2xl font-light text-gray-300 mx-6 my-12 space-y-4 '>
                    <p className='hover:text-cyan-400 flex items-center gap-3'><GlobeAmericasIcon className="h-7 w-7 text-cyan-500"></GlobeAmericasIcon>{website}</p>
                    <p className='hover:text-cyan-400 flex items-center gap-3'><EnvelopeIcon className="h-7 w-7 text-cyan-500"></EnvelopeIcon>{email}</p>
                    <p className='hover:text-cyan-400 flex items-center gap-3'><PhoneIcon className="h-7 w-7 text-cyan-500"></PhoneIcon>{phone}</p>
                </div>
            </div>
            <div className='basis-3/4'>
                right
            </div>
        </div>
    );
};

export default UserDetail;
