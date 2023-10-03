import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Users from './components/Users/Users.jsx'
import UserDetail from './components/UserDetail/UserDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'users',
        element: <Users />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      }
    ]
  },
  {
    path: 'userDetail/:userId',
    element: <UserDetail />,
    loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
