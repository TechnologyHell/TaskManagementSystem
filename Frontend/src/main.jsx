import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import{
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Signin from './routes/Signin.jsx'
import Signup from './routes/Signup.jsx';
import Home from  './routes/Home.jsx';
import Root from './routes/Root.jsx';
import AdminDashboard from './routes/adminDashboard.jsx';
import UserDashboard from './routes/userDashboard.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path = 'signin' element = {<Signin />}/>
      <Route path = 'signup' element = {<Signup />} />
      <Route path = 'admin/dashboard' element={<AdminDashboard />} />
      <Route path = 'user/dashboard' element={<UserDashboard />} />
    </Route>
  )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
