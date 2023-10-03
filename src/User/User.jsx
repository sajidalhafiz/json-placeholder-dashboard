import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const { id, name, phone, email } = user;

    return (
        <div className='px-6 py-2 border flex justify-between items-center'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button className='bg-cyan-600 text-white font-bold py-2 px-4'>
                <Link to={`/userDetail/${id}`}>Details</Link>
            </button>
        </div>
    );
};

export default User;