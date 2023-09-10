import React from 'react'
import Header from "../component/Header"
import { 
  Box, 
  Card, 
  CardActions, 
  CardContent, 
  Collapse, 
  Button, 
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from '../state/api';

const Products = () => {
  const {data, isLoading} = useGetProductsQuery(); 
  console.log(data);
  return (
    <>
    <Header title="Products" subtitle="Welcome in our Shop!!"/>
    
    </>
  )
}

export default Products