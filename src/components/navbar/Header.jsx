import React from "react";

import NavbarRight from "./navbarItem/navbarRight";
import NavbarLeft from "./navbarItem/NavbarLeft";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 ">
      <NavbarLeft />
      <NavbarRight />
    </header>
  );
};

export default Header;
