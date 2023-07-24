"use client";
import React from "react";
import { useSearchParams, usePathname } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const surname = searchParams.get("surname");

  const pathName = usePathname();

  console.log("name: ", name, " surname: ", surname, pathName);

  return <div>Page About</div>;
};

export default Page;
