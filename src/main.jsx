import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import AddProject from './components/AddProject.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/register',
        element:<Register />
      },{
        path:'/login',
        element:<Login />
      },
      {
        path:'/addProject',
        element:<AddProject />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
