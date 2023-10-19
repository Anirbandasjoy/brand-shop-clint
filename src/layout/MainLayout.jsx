import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default MainLayout