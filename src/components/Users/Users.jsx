import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../../User/User';

const Users = () => {

    const users = useLoaderData();
    
    return (
        <div className='w-2/3 p-6 shadow-md mx-auto my-6'>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
        </div>
    );
};

export default Users;