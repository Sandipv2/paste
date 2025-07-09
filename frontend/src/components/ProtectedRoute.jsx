import { useEffect } from "react";
import { useAuthStore } from "../store/authStore"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {
    const { isLoggedIn, user, isLoading, checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth().catch((err) => {
            console.log(err.message)
        });
    }, [checkAuth]);

    if (isLoading) {
        return <div className="bg-gradient-to-br from-black to-cyan-800 min-h-screen flex justify-center items-center text-white font-bold">Loading...</div>;
    }

    if (!isLoggedIn) {
        return <Navigate to='/login' replace />
    }

    if (!user.isAccountVerified) {
        return <Navigate to='/verify-email' replace />;
    }

    return children;
}

export default ProtectedRoute