import React from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../dashboard/index';
import { useGetUserQuery } from '../state/api';
import { useSelector } from 'react-redux';


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
        <Outlet />
        <Dashboard />
      </Box>
    </Box>
    </Router>
  );
};

export default Layout;