

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";


const UpdateProduct = () => {
    const { state } = useLocation()
    const [selectedCategory, setSelectedCategory] = useState(state.brand);
    const handleItemSelect = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;
        const category = form.category.value;
        const product = { name, price, category, rating, image, description, brand: selectedCategory }
        console.log(product)

        try {
            const { data } = await axios.put(`http://localhost:5000/product/${state._id}`, product)
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success("Product Updated Successfully")
            }
        } catch (error) {
            toast.error(error.message)

        }


    }
    return (
        <div className="mt-5">
            <div className="w-4/6 mx-auto  text-purple-500 font-semibold">

            </div>
            <div className="text-center space-y-1 ">
                <h1 className="text-2xl">Update Product</h1>
                <p className="text-gray-400 text-sm">Use the below form to Update a  Product</p>
            </div>
            <div className=" mt-10">
                <form className="mx-auto space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row w-full px-5 md:px-0 md:w-4/6  mx-auto md:gap-5 gap-2">
                        <div className="  space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="name">Name </label>
                            <input defaultValue={state.name} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="name" id="name" placeholder="Enter Product name" required />
                        </div>
                        <div className=" space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="price">Price </label>
                            <input defaultValue={state.price} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="price" id="price" placeholder="Enter Product $price" required />
                        </div>

                        <div className=" space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="price">Category </label>
                            <input defaultValue={state.category} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="category" id="category" placeholder="Enter Product category" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full px-5 md:px-0 md:w-4/6  mx-auto md:gap-5 gap-2">
                        <div>
                            <label className="text-gray-400 " htmlFor="price">Brand</label>
                            <select value={selectedCategory} className="outline-none mt-1 border-gray-300 border-2 py-2 px-2 w-full" id="itemDropdown" onChange={handleItemSelect}>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                                <option value="Intel">Intel</option>
                                <option value="LG">LG</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Acer">Acer</option>
                            </select>
                        </div>
                        <div className=" space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="price" >Rating </label>
                            <input defaultValue={state.rating} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="rating" id="rating" placeholder="Enter Product Rating" required />
                        </div>
                    </div>

                    <div className="md:w-4/6 w-full px-5 md:px-0 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="image">Image </label>
                        <input defaultValue={state.image} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="image" id="image" placeholder="Enter Product Image Url" required />
                    </div>

                    <div className="md:w-4/6 w-full px-5 md:px-0  mx-auto space-y-1  flex flex-col">
                        <label className="text-gray-400" htmlFor="image">Description </label>
                        <textarea defaultValue={state.description} name="description" id="description" className="textarea textarea-bordered" placeholder="Product desc..."></textarea>
                    </div>



                    <div className="md:w-4/6 w-full px-5 md:px-0  mx-auto ">

                        <button className="btn w-full hover:text-gray-900 mt-5 capitalize text-gray-700 bg-green-300">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct