import React from 'react';

const UserBtn = ({user}) => {
    // console.log(user)
    return (
        <div className='space-y-2 bg-cyan-600 hover:bg-slate-500 duration-500 active:bg-cyan-700 active:scale-95 text-white text-center font-bold p-4 rounded-lg uppercase'>
            <h2>To Do</h2>
            <p className='p-1 bg-cyan-900 rounded-md'>{user}</p>
        </div>
    );
};

export default UserBtn;