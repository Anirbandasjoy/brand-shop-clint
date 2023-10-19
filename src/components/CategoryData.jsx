import image1 from '../assets/logo1.png'
import image2 from '../assets/logo2.png'
import image3 from '../assets/logo3.png'
import image4 from '../assets/logo4.png'
const CategoryData = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-8 px-2 lg:px-0">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white"> Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Laptop Category */}
                    <div className="p-4 bg-white dark:bg-gray-600 dark:text-white  shadow rounded-lg">
                        <img className='w-10' src={image1} alt="" />
                        <h3 className="text-xl font-semibold">Laptops</h3>
                        <p className=" dark:text-white text-gray-500">Explore our latest laptop models.</p>

                    </div>

                    {/* Phone Category */}
                    <div className="p-4 bg-white dark:bg-gray-600 dark:text-white  shadow rounded-lg">
                        <img className='w-10' src={image2} alt="" />
                        <h3 className="text-xl font-semibold">Phones</h3>
                        <p className=" dark:text-white text-gray-500">Discover our range of smartphones.</p>

                    </div>

                    {/* Camera Category */}
                    <div className="p-4 bg-white  dark:bg-gray-600 dark:text-white shadow rounded-lg">
                        <img className='w-10' src={image3} alt="" />
                        <h3 className="text-xl font-semibold">Cameras</h3>
                        <p className=" dark:text-white text-gray-500">Capture moments with our high-quality cameras.</p>

                    </div>

                    {/* Headphones Category */}
                    <div className="p-4 bg-white dark:bg-gray-600 dark:text-white  shadow rounded-lg">
                        <img className='w-10' src={image4} alt="" />
                        <h3 className="text-xl font-semibold">Headphones</h3>
                        <p className=" dark:text-white text-gray-500">Enjoy music with our premium headphones.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryData;
