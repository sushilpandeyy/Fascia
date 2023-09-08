import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter, 
  RouterProvider,
  Navigate
} from "react-router-dom";
import Dashboard from './scenes/dashboard/index'
import Layout from './scenes/Layout'



//const store = configureStore({
//  reducer: {
//    global: globalReducer,
//  }
//})

const router= createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace={true}/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout/>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

