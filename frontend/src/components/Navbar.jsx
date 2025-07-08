import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between px-7 md:px-0 md:justify-around items-center py-2 fixed w-full border-b-1 border-slate-600">
        <div>
            <h1 className="text-cyan-500 font-extrabold text-2xl cursor-pointer">PASTE</h1>
        </div>

        <div>
            <button 
                className="flex items-center gap-2 hover:gap-1 ease-linear duration-300 cursor-pointer border-2 border-cyan-500 rounded-full px-3 py-[2px] font-bol transition-all hover:bg-cyan-500 hover:text-black"
            >
                <p>Log In</p>
                <FaArrowRight/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar