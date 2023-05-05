import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { defaultTheme } from "../theme";

const loaderStyles = {
  position: 'absolute',
  top: '160px',
}

export const LoadingComponent = () => {
  return (
    <Box sx={ loaderStyles }>
      <CircularProgress sx={{
        width: '80px !important',
        height: '80px !important',
        color: defaultTheme.colors.red,
      }}/>
    </Box>
  )
}