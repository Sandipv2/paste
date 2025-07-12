import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";

function Navbar() {
    const { isLoggedIn, user, checkAuth, logout } = useAuthStore();
    const [isProfileClicked, setIsProfileClicked] = useState(false);

    useEffect(() => {
        checkAuth().catch((error) => {
            console.log(error.message)
        });
    }, [checkAuth])

    async function handleLogout() {
        await logout().catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <nav className="bg-black text-white flex justify-between px-7 md:px-0 md:justify-around items-center py-2 fixed w-full border-b-1 border-slate-600">
            <Link to='/'>
                <h1 className="text-cyan-500 font-extrabold text-2xl cursor-pointer">PASTE</h1>
            </Link>

            <div>
                {isLoggedIn && user.isAccountVerified
                    ?
                    <div onClick={() => setIsProfileClicked(!isProfileClicked)} className="relative w-10 h-10 bg-cyan-500 rounded-full text-center content-center">
                        <p className="font-bold text-xl text-black cursor-pointer">{user.name[0].toUpperCase()}</p>

                        <ul className={`absolute border border-slate-600 top-12 right-0 text-left bg-black text-white rounded-md overflow-hidden w-45 ${isProfileClicked ? 'block' : 'hidden'}`}>
                            <li className="hover:bg-cyan-600 duration-300 p- cursor-pointer py-2 px-3">
                                <NavLink to='/' className={({ isActive }) => `
                                        ${isActive ? 'bg-cyan-600' : ''} p-1 rounded block
                                    `}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="hover:bg-cyan-600 duration-300 p- cursor-pointer py-2 px-3">
                                <NavLink to='/dashboard' className={({ isActive }) => `
                                    ${isActive ? 'bg-cyan-600' : ''} p-1 rounded
                                    `}>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li onClick={handleLogout} className="hover:bg-cyan-600 duration-300 p- cursor-pointer py-2 px-3">
                                <NavLink className={`p-1`}>
                                    Logout
                                </NavLink>
                            </li>
                            <li className="hover:bg-red-300 duration-300 p- cursor-pointer py-2 px-3 text-red-500">
                                <NavLink to='/delete-account' className={({ isActive }) => `
                                            ${isActive ? 'bg-red-300' : ''} p-1 rounded
                                        `}>
                                    Delete Account
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    :
                    <Link to='/login'>
                        <button
                            className="w-[120px] flex items-center justify-center gap-2 ease-linear duration-300 cursor-pointer border-2 border-cyan-500 rounded-full px-3 py-[2px] font-bol transition-all hover:bg-cyan-500 hover:text-black hover:scale-95 group"
                        >
                            <p>Sign In</p>
                            <FaArrowRight className="group-hover:translate-x-[-5px] duration-300" />
                        </button>
                    </Link>}
            </div>
        </nav>
    )
}

export default Navbar