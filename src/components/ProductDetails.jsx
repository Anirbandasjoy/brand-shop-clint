import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { SiBrandfolder } from 'react-icons/si';
import { BsCurrencyDollar } from 'react-icons/bs';
import Rating from 'react-rating';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const email = user.email;
    const { state } = useLocation();

    const { name, brand, category, image, price, rating, description, } = state || {}

    const cardData = { name, brand, category, image, price, rating, description, email }
    const handleOrder = async () => {
        try {
            const { data } = await axios.post("https://bran-shop-server.vercel.app/order", cardData)
            if (data.insertedId) {
                toast.success("Added Successfully")
            }
            else {
                toast.error("Product Already Added")
            }
        } catch (error) {
            toast.error("Product Already Added")
        }
    }

    return (
        <div className='sm:pt-10 pt-5 lg:h-screen'>
            {/* <div className=" px-5 mb-5 dark:text-white mx-auto  text-purple-500 font-semibold">
                <Link className="flex items-center gap-1" to={`/brand/${brand}`}>
                    <AiOutlineDoubleLeft className="cursor-pointer" />
                    <h1 className="cursor-pointer">go back</h1>
                </Link>
            </div> */}
            <div className='flex px-2 lg:px-0 flex-col gap-4 lg:flex-row justify-center container mx-auto'>
                <div className='flex-1 '>
                    <img src={state.image} alt={state.name} />
                </div>
                <div className='flex-1 space-y-8 relative overflow-auto'>
                    <div className='flex gap-3 '>
                        <h1 className='font-bold text-xl  lg:text-4xl text-gray-500'>{state.name}</h1>
                        <span className='bg-red-400 text-white h-fit px-2 rounded-md'>{state.category}</span>
                    </div>

                    <h5 className='text-gray-400 text-xs lg:text-lg text-justify'>
                        {state.description}
                    </h5>
                    <div className='grid grid-cols-2 sm:grid-cols-3 justify-between sm:grid-rows-3'>
                        <div className='flex  items-center gap-2'>
                            <BsCurrencyDollar className='text-2xl text-gray-400' size={30} />
                            <p className='text-2xl text-gray-400 font-semibold'> ${state.price}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiBrandfolder className='text-xl text-gray-400' size={30} />
                            <h4 className='text-2xl text-gray-400 font-semibold'>
                                {state.brand}</h4>
                        </div>
                        <div className="flex text-3xl text-yellow-600 items-center mt-2.5 mb-5">
                            <Rating
                                initialRating={state.rating}
                                readonly
                                emptySymbol={<AiOutlineStar size={20} />}
                                fullSymbol={<AiTwotoneStar size={20} />}
                            />
                            <span className="bg-blue-100 text-blue-800  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{state.rating}</span>
                        </div>
                    </div>
                    <button onClick={handleOrder} className='w-full font-semibold  -bottom-20 sm:bottom-0 absolute p-3 text-white hover:bg-red-400 bg-red-300'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails