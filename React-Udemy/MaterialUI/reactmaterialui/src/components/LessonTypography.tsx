import { Typography } from "@mui/material";
import React from "react";

const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
        praesentium, explicabo, nobis impedit nihil sint exercitationem ex
        perferendis minima recusandae iusto obcaecati aliquam adipisci, officiis
        quos vel necessitatibus doloremque non?
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
        praesentium, explicabo, nobis impedit nihil sint exercitationem ex
        perferendis minima recusandae iusto obcaecati aliquam adipisci, officiis
        quos vel necessitatibus doloremque non?
      </Typography>

      <Typography variant="h1">H1 GÖRÜNÜMÜ</Typography>
      <Typography variant="h2">H2 GÖRÜNÜMÜ</Typography>
      <Typography variant="h3">H3 GÖRÜNÜMÜ</Typography>
      <Typography variant="h4">H4 GÖRÜNÜMÜ</Typography>
      <Typography variant="h5">H5 GÖRÜNÜMÜ</Typography>
      <Typography variant="h6">H6 GÖRÜNÜMÜ</Typography>

      <Typography variant="h1" component="h4">
        H1 GÖRÜNÜMÜ
      </Typography>

      <Typography variant="h1" component="h4" align="left">
        H1 GÖRÜNÜMÜ
      </Typography>
      <Typography variant="h1" component="h4" align="right">
        H1 GÖRÜNÜMÜ
      </Typography>

      <Typography variant="subtitle1">Alt Başlık1</Typography>
      <Typography variant="subtitle2">Alt Başlık2</Typography>
    </div>
  );
};

export default LessonTypography;
