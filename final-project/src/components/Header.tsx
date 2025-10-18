import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
    return (
      <>
        <div className="flex items-center justify-evenly my-9 text-xl">
          <h1 className="text-2xl font-black ">Aurene</h1>
          <nav className="flex items-center justify-between gap-5">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
            >
              Home
            </NavLink>{" "}
            <NavLink
              to={"/Shop"}
              className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
            >
              Shop
            </NavLink>{" "}
            <NavLink
              to={"/About"}
              className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
            >
              About
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
            >
              Contact
            </NavLink>
          </nav>
          <div className='flex gap-5'>
            <CiHeart />
            <IoPersonOutline />
            <FaShoppingBag />
          </div>
        </div>
      </>
    );
}

export default Header