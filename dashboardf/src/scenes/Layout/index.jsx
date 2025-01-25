import React from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../dashboard/index';
import { useGetUserQuery } from '../state/api';
import { useSelector } from 'react-redux';
import Products from '../Products/index';
import Customers from '../Customers/index';
import Transactions from '../Transactions/index';
import Geography from '../Geography/index';
import Overview from '../Overview/';
import Daily from "../daily";
import Monthly from "../monthly";
import Breakdown from '../Breakdown/index';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const userId = useSelector((state) => state.global.userId);
  const data = useGetUserQuery(userId);
  console.log(data)
  const userName = data?.data?.name || '';
  const occupation = data?.data?.occupation || " ";
  return (<Router>
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user= {userName}
          occup={occupation}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/users" element={<Customers />}/>
        <Route path='/money' element={<Transactions/>}/>
        <Route path='/map' element={<Geography/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path='/daily' element={<Daily/>}/>
        <Route path="/monthly" element={<Monthly/>}/>
        <Route path="/breakdown" element={<Breakdown/>}/>
      </Routes>
      </Box>
    </Box>
    </Router>
  );
};

export default Layout;