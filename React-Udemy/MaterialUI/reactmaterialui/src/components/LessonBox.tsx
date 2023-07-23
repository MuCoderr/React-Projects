import React from "react";
import { Box } from "@mui/material";

const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100px",
        height: "100px",
        color: "white",
        padding: "20px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      Hello
    </Box>
  );
};

export default LessonBox;
