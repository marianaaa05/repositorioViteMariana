import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import 'animate.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#059F9B] text-stone-50">
      

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
      </ul>

      {/* Menu Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu mobile */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#071013] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
      </ul>

      {/* Iconos RRSS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 animate__animated animate__fadeInLeft sm:flex">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#059F9B]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://wa.me/573234566707"
            >
              WhatsApp
              <IoLogoWhatsapp size={36} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DF90AD] ">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://github.com/marianaaa05"
            >
              Github
              <FaGithub size={36} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#059F9B]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:nanaarredondo220@gmail.com"
            >
              Correo
              <HiOutlineMail size={36} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
