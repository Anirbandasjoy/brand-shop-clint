
import { useContext } from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsTelephoneForward } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import toast from 'react-hot-toast'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfully")
                navigate("/login")
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=''>
            <div className='flex bg-base-200 dark:bg-gray-700 dark:text-white flex-col shadow-lg md:flex-row justify-between items-center p-3 ' data-aos="zoom-in">

                <div className='flex flex-col md:flex-row mb-6 md:mb-0 text-xs items-center  gap-5 list-none'>
                    <div className='flex items-center gap-2'>
                        <BsTelephoneForward />
                        <li>(+088) 01772838734</li>
                    </div>
                    <div className='flex items-center gap-2'>
                        <HiOutlineMail />
                        <li>adj@gmail.com</li>
                    </div>


                    {
                        user && <div className='flex items-center gap-2'>
                            <CgProfile />
                            <li>{user && user?.displayName} </li>
                        </div>
                    }

                </div>
                <div className='flex items-center gap-3'>
                    <button className=" bg-gray-100">
                        <AiFillTwitterCircle className='text-gray-500 hover:text-teal-400 duration-300' size={19} />
                    </button>
                    <button className=" bg-gray-100">
                        <BsFacebook className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                    </button>
                    <button className=" bg-gray-100">
                        <AiFillLinkedin className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                    </button>
                    <button className=" bg-gray-100">
                        <AiOutlineInstagram className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                    </button>



                    {
                        user ? <Link onClick={handleLogOut} className=" bg-blue-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                            Logot
                        </Link> : <Link to="/login" className=" bg-blue-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                            Login
                        </Link>
                    }


                </div>

            </div>
        </div>
    )
}

export default Header