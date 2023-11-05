import { useState } from "react";
import { NavbarList } from "./NavbarList";
import arrowUp from "../../assets/arrow-up.png";
import logo from "../../assets/logo.png";
import menu from "../../assets/close-menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className="flex justify-center">
      {/* Navbar for med/large screens */}
      <div className="flex justify-center items-center py-2 absolute top-5 z-40 max-[1000px]:hidden">
        <img className="w-[250px]" src={logo} alt="Dreamwebsitez logo" />
      </div>

      <div className="fixed-navbar flex bg-black px-3 py-2.5 text-white rounded-full items-center gap-10 fixed bottom-8 z-40 max-[1000px]:hidden">
        <a
          href="#hero"
          className="bg-gray-800 px-5 py-3 rounded-full group hover:bg-secondary duration-150"
        >
          <img
            className="w-[25px] invert group-hover:invert-0"
            src={arrowUp}
            alt="Arrow pointing upwards"
          />
        </a>

        <ul className="flex gap-10 font-bold text-sm">
          <li className="hover:text-black hover:bg-white p-3 rounded-full duration-150 cursor-pointer">
            <a href="#benefits">Benefits</a>
          </li>
          <li className="hover:text-black hover:bg-white p-3 rounded-full duration-150 cursor-pointer">
            <a href="#recentwork">Recent Work</a>
          </li>
          <li className="hover:text-black hover:bg-white p-3 rounded-full duration-150 cursor-pointer">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:text-black hover:bg-white p-3 rounded-full duration-150 cursor-pointer">
            <a href="#faq">FAQs</a>
          </li>
          <li className="bg-gray-800 hover:text-black hover:bg-secondary p-3 rounded-full duration-150 cursor-pointer">
            <p className="contact">Contact</p>
          </li>
        </ul>
      </div>

      {/* For smaller screens make a fixed hamburger menu */}
      {/* Make navber bg change color on scroll */}
      <div
        className={`flex flex-col justify-center items-center fixed z-40 min-[1000px]:hidden w-full duration-300 ${
          navbar ? "bg-black bg-opacity-70" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between w-full px-5 py-3">
          <a href="#hero">
            <img
              className={`w-[150px] duration-300 ${navbar ? "invert" : null}`}
              src={logo}
              alt="Dreamwebsitez logo"
            />
          </a>
          <img
            className={`w-[45px] duration-300 ${navbar ? "invert" : null}`}
            src={menu}
            alt="Menu"
            onClick={() => setToggle((toggle) => !toggle)}
          />
        </div>

        {/* Make the navbar translate down on toggle */}
        <ul
          className={`flex flex-col gap-10 bg-white w-full font-bold pl-10 py-10 ${
            toggle ? null : "hidden"
          }`}
        >
          {NavbarList.map((nav, idx) => (
            <li key={idx} className="hover:text-pink">
              <a href={`#${nav.link}`}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
