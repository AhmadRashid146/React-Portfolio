import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
const Layout = () => {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <div className=" bg-white dark:bg-black px-10 md:px-20 lg:px-40">
        <Navbar darkMode={darkMode} handlesetDarkMode={setDarkMode} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
