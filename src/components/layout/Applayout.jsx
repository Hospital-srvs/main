import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from "../ui/Footer"
import { Header } from "../ui/Header"
import MouseFollower from "../../pages/MouseFollower"

export const Applayout = () => {
    return<>

        <Header/>
        <MouseFollower/>
        <Outlet/>
        <Footer/>
        <ScrollRestoration/>

    </>
}