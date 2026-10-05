import React from "react";
import Header from "./compenents/Header/header";
import Footer from "./compenents/Footer/footer";
import { Outlet } from "react-router";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout