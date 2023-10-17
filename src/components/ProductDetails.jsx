import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { SiBrandfolder } from 'react-icons/si';
import { BsCurrencyDollar } from 'react-icons/bs';
import Rating from 'react-rating';
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const { state } = useLocation();
    return (
        <div className='flex flex-col gap-4 lg:flex-row justify-center container mx-auto'>
            <div className='flex-1 '>
                <img src={state.image} alt={state.name} />
            </div>
            <div className='flex-1 space-y-4 relative'>
                <div className='flex gap-3 '>
                    <h1 className='font-bold text-4xl text-gray-500'>{state.name}</h1>
                    <span className='bg-red-300 h-fit px-2 rounded-md'>Electronic</span>
                </div>

                <h5 className='text-gray-400 text-lg text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi quasi repellendus delectus exercitationem libero quibusdam quo nostrum hic, ab provident amet reprehenderit nemo asperiores officiis fuga in! Doloremque quos non sapiente sint! Aut obcaecati asperiores eum. Fugit dolore, in voluptatem tenetur, nobis ad provident qui tempore veniam ut ex, distinctio temporibus eius! Culpa ab voluptates repudiandae dignissimos temporibus! Nam, neque perspiciatis similique saepe veritatis at quasi officia iste fugiat distinctio hic magni earum ad vitae delectus nesciunt porro fuga dolorum impedit maiores optio. Repudiandae temporibus quae amet, officiis, corporis, a nam natus nemo nisi harum non et neque cumque.
                </h5>
                <div className='flex items-center justify-between flex-row-reverse'>
                    <div className='flex items-center gap-2'>
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
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{state.rating}</span>
                    </div>
                </div>
                <button className='w-full font-semibold  bottom-0 absolute p-3 text-white hover:bg-red-400 bg-red-300'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails