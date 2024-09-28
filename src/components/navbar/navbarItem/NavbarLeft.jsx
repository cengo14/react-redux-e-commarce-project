import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <Link
      to="/"
      className="bg-gray-100 font-bold text-4xl py-2 px-4 rounded-3xl "
    >
      Fake
      <span className="text-2xl font-light text-red-500 font-mono">STORE</span>
    </Link>
  );
};

export default NavbarLeft;
