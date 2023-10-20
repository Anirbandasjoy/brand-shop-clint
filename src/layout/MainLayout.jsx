import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Loading from "../components/Loading"
import Footer from "../components/Footer"

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header />
            <Navbar />

            <div>
                {
                    navigation.state === "loading" ? <Loading /> : <Outlet />
                }
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout