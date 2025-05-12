import React from "react";
import { Outlet, outlet } from "react-router"
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import style from "./layout/Layout.jsx"


const Layout = () => { 
    return (
        <div className="layOutWrapper">
            <Header />
            <div>
                <SideBar />
                <Outlet/>
            </div>
            <Footer/>
        </div>

    )
}

export default Layout;