import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"


const Layout = () => {
  return (
    <div className="bg-white px-10 md:px-20 lg:px-40">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout