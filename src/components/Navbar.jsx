import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
// import userProfile from '../assets/user.png'
const Navbar = () => {
    const navitems = <>
        <li className="font-semibold"><NavLink to="/">Home</NavLink></li>
        <li><NavLink className="font-semibold" to="/add-product">Add-product</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navitems
                            }
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="lg:w-16 w-10" src={logo} alt="logo" />
                        <Link to="/" className=" cursor-pointer font-semibold lg:text-xl text-xs">Adj-Shop</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navitems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <Link to="/cart" className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-7 sm:w-7 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </Link>
                        </label>
                        <Link className="lg:px-4 px-3 py-1 text-white lg:py-2 capitalize rounded-sm text-sm lg:text-lg bg-red-600">Login</Link>

                    </div>
                </div>
            </div>


        </div >
    )
}

export default Navbar