import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <a
        href="/"
        className=" container border-solid border-b-2 border-red-500 p-2  hover:border-green-600 mt-1 w-auto text-center md:mr-4"
      >
        HEIM
      </a>
      <a
        href="/vorur"
        className=" container border-solid border-b-2 border-red-500 p-2  hover:border-green-600 mt-1 w-auto text-center md:mr-4"
      >
        VÖRUR
      </a>
      <a
        href="/Fjaroflun"
        className=" container border-solid border-b-2 border-red-500 p-2 hover:border-green-600 mt-1 w-auto text-center md:mr-4"
      >
        FJÁRÖFLUN
      </a>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" w-1/3 flex justify-end">
        <div className="hidden w-full md:flex justify-end">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className=" flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
