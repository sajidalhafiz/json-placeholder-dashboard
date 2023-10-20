import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Users from './components/Users/Users.jsx'
import UserDetail from './components/UserDetail/UserDetail.jsx'
import Todos from './components/Todos/Todos'
import Dashboard from './components/Dashboard/Dashboard'
import ProfileEdit from './components/ProfileEdit/ProfileEdit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: 'userDetail/:userId',
        element: <UserDetail />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: 'userDetail/:userId/profileEdit',
        element: <ProfileEdit />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'todos',
        element: <Todos />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/todos')
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
