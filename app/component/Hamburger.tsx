'use client'
import { useState } from "react";
import React from 'react'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

    <button
  type="button"
  className="md:hidden"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "×" : "☰"}
  <ul
  
className={`${menuOpen ? "flex" : "hidden"} fixed right-0 top-0 z-50 h-screen w-2/4 flex-col items-center justify-center gap-8 bg-white p-5 md:static md:flex md:h-auto md:w-auto md:flex-row md:bg-transparent md:p-0`}

>
    <li>
      <a href="#top" >Home</a>
    </li>
    <li>
      <a href="#top" >About</a>
    </li>
    <li>
      <a href="#top" >Services</a>
    </li>
    <li>
      <a href="#top" >My work</a>
    </li>
    <li>
      <a href="#top" >Contact</a>
    </li>
</ul>
</button>
  )
}

export default Hamburger