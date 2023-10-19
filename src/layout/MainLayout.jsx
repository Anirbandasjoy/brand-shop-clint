import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Loading from "../components/Loading"

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

        </div>
    )
}

export default MainLayout