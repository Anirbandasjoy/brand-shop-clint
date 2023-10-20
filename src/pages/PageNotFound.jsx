
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <BiErrorCircle className="text-red-500 mx-auto w-16 h-16" />

                <h1 className="text-2xl font-semibold mb-2">
                    Page Not Found
                </h1>
                <Link to="/" className="text-red-400 px-3 mt-2 underline">go to home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;
