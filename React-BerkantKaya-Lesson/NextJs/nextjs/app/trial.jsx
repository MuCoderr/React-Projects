"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Trial = () => {
  const routerRed = useRouter();
  console.log("trial");
  return (
    <>
      <div onClick={() => routerRed.push("/about")}>Push</div>
      <div onClick={() => routerRed.back()}>Back</div>
      <div onClick={() => routerRed.forward()}>Forward</div>
      <div onClick={() => routerRed.refresh()}>Refresh</div>
    </>
  );
};

export default Trial;
