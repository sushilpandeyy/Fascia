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
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {api} from "./scenes/state/api";
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "./scenes/state/index";
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

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
      <Provider store={store}>
    <Layout/>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)

