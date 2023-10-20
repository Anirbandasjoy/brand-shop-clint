
import { BiErrorCircle } from "react-icons/bi";

const DataNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center ">
                <BiErrorCircle className="text-red-500 dark:text-white mx-auto w-16 h-16" />
                <h1 className="text-2xl  font-semibold  mb-2">
                    Shopping Cart is empty
                </h1>
                <p className="">You have not added data to the cart yet</p>
            </div>
        </div>
    );
};

export default DataNotFound;
