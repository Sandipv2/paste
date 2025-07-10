import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

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

                        <ul className={`absolute border top-12 right-0 text-left bg-cyan-300 text-black rounded-md overflow-hidden font-bold ${isProfileClicked ? 'block' : 'hidden'}`}>
                            <li onClick={handleLogout} className="hover:bg-slate-400 p-1 cursor-pointer border-b">Logout</li>
                            <li onClick={() => navigate('/dashboard')} className="hover:bg-slate-400 p-1 cursor-pointer">Dashboard</li>
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