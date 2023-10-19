import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { GlobeAmericasIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaUserGroup, FaHouseChimney, FaListCheck } from "react-icons/fa6";

const Dashboard = () => {

    const handleNavItems = location.pathname.includes('todos') || location.pathname.includes('users') || location.pathname.includes('home');

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* Page content here */}
                { handleNavItems ? <Outlet /> : null}
                {/* { handleNavItems } */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-96 min-h-full bg-cyan-950 text-slate-200 text-lg flex flex-col justify-between">
                    {/* Sidebar content here */}
                    <div>
                        <div className='p-2 bg-white rounded-xl'>
                            <h2 className='text-2xl text-cyan-600 font-bold flex justify-between'>
                                <span className='px-3 uppercase'>JSON Placeholder Dash</span>
                            </h2>
                        </div>
                        <div className='my-8 rounded-xl p-2 bg-cyan-900'>
                            <Link className='p-0 px-6 py-3 text-slate-200 rounded-lg hover:bg-cyan-700 duration-500 active:bg-cyan-800 flex items-center gap-4' to='/home'><FaHouseChimney />Home</Link>
                            <Link className='p-0 px-6 py-3 text-slate-200 rounded-lg hover:bg-cyan-700 duration-500 active:bg-cyan-800 flex items-center gap-4' to='/users'><FaUserGroup />User List</Link>
                            <Link className='p-0 px-6 py-3 text-slate-200 rounded-lg hover:bg-cyan-700 duration-500 active:bg-cyan-800 flex items-center gap-4' to='/todos'><FaListCheck />Todo's</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;