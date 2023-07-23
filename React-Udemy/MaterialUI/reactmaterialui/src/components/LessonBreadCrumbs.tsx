import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

export const LessonBreadCrumbs = () => {
  return (
    <Breadcrumbs separator="-" maxItems={2}>
      <Link href="/" underline="hover">
        Anasayfa
      </Link>
      <Link href="/" underline="hover">
        Blog
      </Link>
      <Link underline="none">Müco</Link>
      <Link underline="none">Müco</Link>
      <Link underline="none">Müco</Link>
      <Link underline="none">Müco</Link>
    </Breadcrumbs>
  );
};
