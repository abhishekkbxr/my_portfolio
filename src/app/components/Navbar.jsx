// "use client";
import React from "react";
import NavLink from "./NavLink";


const navLinks = [
  {
    title: "Skills",
    path: "#skill",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {

  return (
    <nav className="fixed mx-auto pt-2 md:pt-6 top-0 left-0 right-0 z-10 ">
      <div className="flex container   items-center  mx-auto ">
        <div className=" border  px-4 md:py-2 w-[21rem] md:w-96 mx-auto items-center bg-[#121212] bg-opacity-100 flex justify-center rounded-full" id="navbar">
          <ul className="flex md:space-x-4 text-white ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
