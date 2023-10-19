import Banner from "../components/banner/Banner"
import Category from "../components/category/Category"
import CategoryData from "../components/CategoryData"
import Contact from "../components/Contact"
import Faq from "../components/FAQ"
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <CategoryData />
            <Faq />
            <Contact />
            <Footer />

        </div>
    )
}

export default Home