"use client";

import Logooo from "./Logo";
import Nav from "./Nav";

export default function TopNav() {
  return (
    <>
      <header className=" flex flex-wrap bg-gray-100 top-0 sticky z-50  px-14 py-5 w-full items-center justify-between border-b-2 border-red-500 ">
        <Logooo />
        <Nav />
      </header>
    </>
  );
}
