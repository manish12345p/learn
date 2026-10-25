
import Image from "next/image";

import Link from "next/link";
import arrow from "../../assets/arrow.png";
import logo from "../../assets/logo.svg";
import Hamburger from "./Hamburger";

const assets = { arrow, logo };

const Navbar = () => {
    
  return (
    <nav className="fixed w-full flex px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between z-50">
      <Link href="#top">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-10 cursor-pointer mr-14"
        />
      </Link>
      <ul className="hidden items-center gap-6 rounded-full px-12 py-3 md:flex lg:gap-8
      bg-red shadow-sm bg-opacity-50">
        <li>
          <Link href="#top">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#work">My Work</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div>
        <Link href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact
          <Image src={assets.arrow} alt="Contact" className="w-4 h-4" />
        </Link>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
