import { Typography, Box } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="var(--Dark)"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="var(--Dark)">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;