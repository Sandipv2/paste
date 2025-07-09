import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

const RedirectLoggedInUser = ({ children }) => {
    const { isLoggedIn, user, checkAuth, isLoading } = useAuthStore();

    useEffect(() => {
        checkAuth().catch((err) => { 
            console.log(err.message)
         });
    }, [checkAuth]);

    if (isLoading) {
        return <div className="bg-gradient-to-br from-black to-cyan-800 min-h-screen flex justify-center items-center text-white font-black">Loading...</div>;
    }

    if (isLoggedIn && user.isAccountVerified) {
        return <Navigate to='/dashboard' replace />
    }

    return children;
}

export default RedirectLoggedInUser