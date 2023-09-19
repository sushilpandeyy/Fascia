import React from "react";
import { Box, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value, increase, icon, description }) => {
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor="#FFD700"
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="p" sx={{ color: "#053F5E" }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography
        variant="h4"
        fontWeight="600"
        sx={{ color: "#022C43" }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{ color: "#053F5E" }}
        >
          {increase}
        </Typography>
        <Typography
        variant="p">{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;