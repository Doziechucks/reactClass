import React from "react";
import { Outlet } from "react-router"
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import style from "./layout.module.css"


const Layout = () => { 
    return (
        <div className={style.layOutWrapper}>
            <Header />
            <div className={style.SideBarOutlet}>
                <SideBar />
                <Outlet/>
            </div>
            <Footer/>
        </div>

    )
}

export default Layout;