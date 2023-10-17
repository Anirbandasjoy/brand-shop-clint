import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Products = () => {
    const [products, setProducts] = useState([])
    const { state } = useLocation();
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/product/${state}`)
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(products)
    return (
        <div>Products</div>
    )
}

export default Products