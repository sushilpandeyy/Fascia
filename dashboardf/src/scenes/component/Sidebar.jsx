import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  AddCardOutlined,
  MapOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { 
    createBrowserRouter, 
    RouterProvider,
    useNavigate,
    useLocation
  } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import sushil from "../assets/sushil.jpg";
import { boxSizing, fontWeight } from "@mui/system";


const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "Information",
        icon: null
    },
    {
        text: "Shop",
        icon: <ShoppingCartOutlined />
    },
    {
        text: "Users",
        icon: <Groups2Outlined />
    },
    {
        text: "Money",
        icon: <AddCardOutlined />
    },
    {
        text: "Map",
        icon: <MapOutlined />
    },
    {
        text: "Internal",
        icon: null
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />
    },
      {
        text: "Daily",
        icon: <TodayOutlined />,
      },
      {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
      },
      {
        text: "Breakdown",
        icon: <PieChartOutlined />,
      },
     // {
     //   text: "Management",
     //   icon: null,
     // },
     // {
     //   text: "Admin",
     //   icon: <AdminPanelSettingsOutlined />,
     // },
     // {
     //   text: "Performance",
     //   icon: <TrendingUpOutlined />,
     // },
    ];

    function getcurrent(){
      const ls=useLocation();
      setActive(ls);
    }

const Sidebar = ({
    user, drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile
  }) => {
    const location=useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setActive(location.pathname);
    }, [location])
    console.log("Active "+active);
  return (
    <Box component="nav">
            <Drawer
            open={isSidebarOpen}
            onClose={()=>setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                   color: "var(--Lildark)",
                   backgroundColor: "var(--Dark)",
                   boxSizing: "border-box",
                   borderWidth: isNonMobile?0:"2 px",
                   width: drawerWidth
                  }
            }}
            >
                <Box width="100%">
                  <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color="var(--Lildark)">
                        <Box display="flex" alignItems="Center" gap="0.5rem">
                            <Typography variant="h6" fontWeight="bold" color="var(--Lildark)" >
                                Fascia 
                            </Typography>
                        </Box>
                        {!isNonMobile && (
                            <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft/>
                            </IconButton>
                        )}
                    </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({text,icon}) => {
                            if(!icon){
                                return (
                                    <Typography key={text} sx={{m: "2.25rem 0 1rem 3rem"}}>
                                        {text}
                                    </Typography>
                                )
                            }
                            const lcText='/'+text.toLowerCase();
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton 
                                    onClick={()=> {navigate(lcText);
                                    setActive(lcText);
                                }}
                                sx={{
                                  backgroundColor:
                                    active === lcText
                                      ? "var(--Lildark)"
                                      : "transparent",
                                  color:
                                    active === lcText
                                      ? "var(--Lildark)"
                                      : "var(--Dark)",
                                }}
                              >
                                <ListItemIcon
                                  sx={{
                                    ml: "2rem",
                                    color:
                                      active === lcText
                                        ? "var(--Dark)"
                                        : "var(--Highlight)",
                                  }}
                                >
                                  {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} 
                                sx={{
                                  color: "var(--Highlight)",
                                  fontWeight: "100"
                                }}/>
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                                )}
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
    </Box>
  )
}

export default Sidebar;