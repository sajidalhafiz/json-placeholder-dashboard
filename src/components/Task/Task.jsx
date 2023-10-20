import React from 'react';

const Task = ({task}) => {
    // console.log(task)
    return (
        <div className='bg-slate-300 py-3 px-5 my-2 text-slate-700 text-lg rounded-lg'>
            <p>{task.title}</p>
        </div>
    );
};

export default Task;