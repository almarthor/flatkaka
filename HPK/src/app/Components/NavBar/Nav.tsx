import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <a
        href="./vorur"
        className="border-solid border-2 border-red-500 rounded-md  p-1 bg-white mt-1 w-24 text-center md:mr-4"
      >
        Vörur
      </a>
      <a
        href="./pantarnir"
        className="border-solid border-2 border-red-500 rounded-md p-1 bg-white mt-1 w-24 text-center md:mr-4"
      >
        Pantanir
      </a>
      <a
        href="#"
        className=" container border-solid border-2 border-red-500 rounded-md p-1 bg-white mt-1 w-24 text-center md:mr-4"
      >
        Við
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
