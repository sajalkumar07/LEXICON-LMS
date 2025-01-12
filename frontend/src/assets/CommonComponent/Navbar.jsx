/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <main className="">
        <nav className="fixed top-0 left-0 w-full p-3  bg-opacity-50 backdrop-blur-sm bg-gray-900 z-50 text-white ">
          <header className="flex justify-between items-center">
            <div className="flex items-center bg-gray-900 rounded-md p-2 ">
              <h1 className="text-xl font-bold text-white">
                <span className="text-orange-500">L</span>
                EXICON
              </h1>
            </div>
            <div className="">
              <ul className="flex justify-between items-center gap-8 ">
                <Link to="/">
                  <li className="relative group cursor-pointer">
                    Home
                    <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  </li>
                </Link>

                <Link to="/get-courses">
                  <li className="relative group cursor-pointer">
                    <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                    Courses
                  </li>
                </Link>
                <li className="relative group cursor-pointer ">
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  About
                </li>
                <li className="relative group cursor-pointer">
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  Blog
                </li>
                <li className="relative group cursor-pointer">
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  Career
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-8 text-sm font-semibold">
              {/* <Link to="/login">
                <div className="bg-transparent p-2  rounded-sm">Join Now</div>
              </Link> */}
              <Link to="/signup">
                <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                  Join Now
                </button>
              </Link>
            </div>
          </header>
        </nav>
      </main>
    </div>
  );
};

export default Navbar;
