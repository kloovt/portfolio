// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-700 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
        <img src="./JvT_logo.svg" alt="" className="inline-block mr-3 h-6"></img>
        </a>
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jorrit van Triest
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	flex flex-wrap items-center text-base justify-center">
          <a href="/Home" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/Home#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/Home#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="/Home#contact"
          className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
