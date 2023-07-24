import React from "react";
import Link from "next/link";
import Image from "next/image";
import Trial from "./trial";
import { redirect } from "next/navigation";

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const fetchData1 = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/eesti");
  return res.json();
};

const fetchData2 = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/deutschland");
  return res.json();
};

const Page = async () => {
  await sleep(3000);

  let nav1 = false;

  if (nav1) {
    redirect("/about");
  }

  console.log("Mücahit");

  const data1 = fetchData1();
  const data2 = fetchData2();

  const resultData = await Promise.all([data1, data2]);

  // console.log(data1, "data");
  // console.log(data2, "data2");

  // console.log(resultData, "resultData");

  return (
    <>
      <div>Page</div>
      <Link href="/about">Yönlendirme1</Link>
      <Link href="/about?name=berkant&surname=kaya">Yönlendirme2</Link>
      <Link
        href={{
          pathname: "/about",
          query: {
            name: "berkant",
            surname: "kaya",
          },
        }}
      >
        Yönlendirme3
      </Link>

      <Image
        src="https://images.pexels.com/photos/3383361/pexels-photo-3383361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={300}
        height={300}
      />
      <Trial />
    </>
  );
};

export default Page;
