import { FaCopy, FaCopyright } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="bg-black text-center text-white py-3 text-xs flex flex-col justify-center items-center">
            <p>
                &copy; {year}  &lt;sandipv2/&gt;
            </p>
        </div>
    )
}

export default Footer