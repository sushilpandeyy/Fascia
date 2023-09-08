import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
    </Router>
  );
};

export default Layout;