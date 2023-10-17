
import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { Link } from "react-router-dom";



const AddProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleItemSelect = (event) => {
        setSelectedCategory(event.target.value);

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;
        const category = selectedCategory;
        console.log(name, price, rating, image, description, category)
    }
    return (
        <div className="mt-5">
            <div className="w-4/6 mx-auto  text-purple-500 font-semibold">
                <Link className="flex items-center gap-1" to="/services">
                    <AiOutlineDoubleLeft className="cursor-pointer" />
                    <h1 className="cursor-pointer">All Service</h1>
                </Link>
            </div>
            <div className="text-center space-y-1 ">
                <h1 className="text-2xl">Add Product</h1>
                <p className="text-gray-400 text-sm">Use the below form to create a new Product</p>
            </div>
            <div className=" mt-10">
                <form className="mx-auto space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row w-full px-5 md:px-0 md:w-4/6  mx-auto md:gap-5 gap-2">
                        <div className="  space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="name">Name </label>
                            <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="name" id="name" placeholder="Enter Product name" required />
                        </div>
                        <div className=" space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="price">Price </label>
                            <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="price" id="price" placeholder="Enter Product $price" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full px-5 md:px-0 md:w-4/6  mx-auto md:gap-5 gap-2">
                        <div>
                            <label className="text-gray-400 " htmlFor="price">Category </label>
                            <select className="outline-none mt-1 border-gray-300 border-2 py-2 px-2 w-full" id="itemDropdown" value={selectedCategory} onChange={handleItemSelect}>
                                <option value="laptop">Apple</option>
                                <option value="android">Samsung</option>
                                <option value="iPhone">Sony</option>
                                <option value="Sony">Intel</option>
                                <option value="Sony">LG</option>
                                <option value="Sony">Microsoft</option>
                                <option value="Sony">Acer</option>
                            </select>
                        </div>
                        <div className=" space-y-1 w-full ">
                            <label className="text-gray-400" htmlFor="price">Rating </label>
                            <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="rating" id="rating" placeholder="Enter Product Rating" required />
                        </div>
                    </div>

                    <div className="md:w-4/6 w-full px-5 md:px-0 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="image">Image </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="image" id="image" placeholder="Enter Product Image Url" required />
                    </div>

                    <div className="md:w-4/6 w-full px-5 md:px-0  mx-auto space-y-1  flex flex-col">
                        <label className="text-gray-400" htmlFor="image">Description </label>
                        <textarea name="description" id="description" className="textarea textarea-bordered" placeholder="Product desc..."></textarea>
                    </div>



                    <div className="md:w-4/6 w-full px-5 md:px-0  mx-auto ">

                        <button className="btn w-full hover:text-gray-900 mt-5 capitalize text-gray-700 bg-green-300">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct