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
import Products from  "./scenes/Products"
import Customers from "./scenes/Customers"
import Transactions from "./scenes/Transactions"
import Geography from "./scenes/Geography"
import Overview from "./scenes/Overview"
import Daily from "./scenes/daily"
import Monthly from "./scenes/monthly"
import Breakdown from './scenes/Breakdown';

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
    element: <Navigate to=""/>
  },
  {
    path: "",
    element: <Dashboard/>
  },
  {
    path: "/shop",
    element: <Products/>
  },
  {
    path: "/users",
    element: <Customers/>
  },
  {
    path: "/money",
    element: <Transactions/>
  },
  {
    path: "/map",
    element: <Geography/>
  },
  {
    path: "/overview",
    element: <Overview/>
  },
  {
    path: "/daily",
    element: <Daily/>
  },
  {
    path: "/monthly",
    element: <Monthly/>
  },
  {
    path: "/breakdown",
    element: <Breakdown/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
    <Layout>
   <RouterProvider router={router} />
   </Layout>
   </Provider>
  </React.StrictMode>,
)

