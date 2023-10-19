import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../../User/User';

const Users = () => {

    const users = useLoaderData();

    return (
        <>
            <nav className='bg-cyan-800 p-4 text-center'>
                <h2 className='text-5xl text-white'>Users List from JSON Placeholder</h2>
            </nav>
            <div className="overflow-x-auto w-9/12 mx-auto my-8 shadow-xl rounded-xl">
                <table className="table text-cyan-800">
                    <thead className='bg-slate-500 text-white'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className='bg-slate-200'>
                        {
                            users.map(user => <User
                                key={user.id}
                                user={user}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;