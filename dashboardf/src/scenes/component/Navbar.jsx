import React, { useState } from 'react';
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined } from '@mui/icons-material'
import sushil from "../assets/sushil.jpg"
import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material'
import FlexBetween from '../component/FlexBetween'

const Navbar = ({ isSidebarOpen, setSidebarOpen}) => {
  return (
    <>
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/*LEFT SIDE*/}
          <FlexBetween>
            <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
            <FlexBetween 
              backgroundColor="#115173"
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem">
              <InputBase placeholder='Search...' />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>

          {/*RIGHT SIDE*/}
          <FlexBetween gap="1.5rem">
            <IconButton>
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
