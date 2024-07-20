"use client";

import Logooo from "./Logo";
import Nav from "./Nav";

export default function TopNav() {
  return (
    <>
      <header className=" flex flex-wrap bg-gray-300 top-0 sticky z-50 md:px-44  px-14 py-5 w-full items-center justify-between border-b-2 border-red-500 ">
        <Logooo />
        <Nav />
      </header>
    </>
  );
}
