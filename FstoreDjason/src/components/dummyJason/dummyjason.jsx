import React from 'react'
import { Outlet } from 'react-router'
import Footer  from '../footer/Footer'
import Header from '../header/header'
import SideBar from '../sideBar/SideBar'
import style from './dummyjson.module.css'

const DummyJason = () => { 
    return (
        <div className={ style.layOutWrapper}>
            <Header />
            <div className={styleSideBarOutlet}>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
       </div>
    )
}