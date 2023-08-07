import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"


const Layout = () => {
  return (
    <div className=" h-screen bg-white px-10">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout