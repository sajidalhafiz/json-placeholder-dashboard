import React from 'react';
import Task from '../Task/Task';
import * as emoji from 'node-emoji'
import { Link, useLoaderData } from 'react-router-dom';
import UserBtn from '../UserBtn/UserBtn';

const Todos = () => {
    // console.log(emoji.find('🛠️'))

    const todos = useLoaderData();
    // console.log(todos)
    const eachUserTodos = todos.filter(userTodo => userTodo.userId == 1)
    // console.log(eachUserTodos)
    const completeTask = eachUserTodos.filter(task => task.completed == true)
    const inProgressTask = eachUserTodos.filter(task => task.completed == false)
    console.log(completeTask, inProgressTask)

    const usersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='h-full box-border flex flex-col justify-between'>
            <nav className='bg-cyan-800 p-4 text-center'>
                <h2 className='text-5xl text-white'>Users Todo's from JSON Placeholder</h2>
            </nav>
            {/* <div className='p-4 flex gap-4 justify-center'>
                {
                    usersArr.map(user => <UserBtn
                        user={user}
                    ></UserBtn>)
                }
            </div> */}
            <div className='bg-slate-500 m-4 p-6 rounded-2xl h-full space-y-4 flex flex-col'>
                <h2 className='text-slate-300 text-2xl text-center uppercase font-bold'>Drag & Drop ToDo Board</h2>
                <div className='flex gap-4 grow'>
                    <div className='w-1/3 border-2 border-slate-500 bg-slate-400 rounded-xl p-6 shadow-md'>
                        <h2 className='text-xl text-slate-600 font-semibold pb-2'>🛠️ In Progress</h2>
                        <div className='bg-slate-600 h-1 opacity-30 rounded-md' />
                        {
                            inProgressTask.map(task => <Task
                                key={task.id}
                                task={task}
                            ></Task>)
                        }
                    </div>
                    <div className='w-1/3 border-2 border-slate-500 bg-slate-400 rounded-xl p-6 shadow-md'>
                        <h2 className='text-xl text-slate-600 font-semibold pb-2'>✅ Complete</h2>
                        <div className='bg-slate-600 h-1 opacity-30 rounded-md' />
                        {
                            completeTask.map(task => <Task
                                key={task.id}
                                task={task}
                            ></Task>)
                        }
                    </div>
                    <div className='w-1/3'></div>
                </div>
            </div>
        </div>
    );
};

export default Todos;