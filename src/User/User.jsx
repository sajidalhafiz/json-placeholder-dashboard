import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const { id, name, phone, email } = user;

    return (
        <>
            <tr className='hover:bg-slate-300 duration-500'>
                <th>{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <button className='bg-cyan-600 hover:bg-cyan-500 duration-500 active:bg-cyan-700 active:scale-95 text-white font-bold py-2 px-4 rounded-lg uppercase'>
                        <Link to={`/userDetail/${id}`}>Details</Link>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default User;