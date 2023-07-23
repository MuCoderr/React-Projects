import React from "react";
import { Link, Box } from "@mui/material";

export const LessonLink = () => {
  return (
    <Box>
      {/* <Link href="https://patika-weatherapp.netlify.app/">Websiteme git</Link>
      <Link href="https://patika-weatherapp.netlify.app/" color="error">
        Websiteme git
      </Link>
      <Link
        href="https://patika-weatherapp.netlify.app/"
        color="error"
        variant="body2"
      >
        Websiteme git
      </Link> */}

      <Link href="https://patika-weatherapp.netlify.app/" underline="none">
        Websiteme git
      </Link>

      <Link href="https://patika-weatherapp.netlify.app/" underline="hover">
        Websiteme git
      </Link>

      <Link href="https://patika-weatherapp.netlify.app/" underline="always">
        Websiteme git
      </Link>
    </Box>
  );
};
