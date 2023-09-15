import React from 'react'
import Header from "../component/Header";
import {Box} from "@mui/material"
import Breakdowncharts from '../component/Breakdowncharts';
const Breakdown = () => {
  return (
    <div>
        <Header title="Breakdown" subtitle="Breaking Down Information"/>
        <Breakdowncharts/>
    </div>
  )
}

export default Breakdown