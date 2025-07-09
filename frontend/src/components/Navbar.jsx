import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

function Navbar() {
    const {isLoggedIn, isAuthenticated, user, checkAuth} = useAuthStore();

    useEffect(() => {
        checkAuth().catch(() => {});
    }, [checkAuth])

    return (
        <nav className="bg-black text-white flex justify-between px-7 md:px-0 md:justify-around items-center py-2 fixed w-full border-b-1 border-slate-600">
            <Link to='/'>
                <h1 className="text-cyan-500 font-extrabold text-2xl cursor-pointer">PASTE</h1>
            </Link>

            <div>
                {isLoggedIn && isAuthenticated
                ?
                <p className="w-10 h-10 bg-cyan-500 rounded-full text-center content-center text-xl font-bold">
                    {user.name[0].toUpperCase()}
                </p>
                :
                <Link to='/login'>
                    <button
                        className="w-[120px] flex items-center justify-center gap-2 ease-linear duration-300 cursor-pointer border-2 border-cyan-500 rounded-full px-3 py-[2px] font-bol transition-all hover:bg-cyan-500 hover:text-black hover:scale-95 group"
                    >
                        <p>Sign In</p>
                        <FaArrowRight className="group-hover:translate-x-[-5px] duration-300"/>
                    </button>
                </Link>}
            </div>
        </nav>
    )
}

export default Navbar