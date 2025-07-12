import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";

function DeleteAccount() {
    const { isLoading, deleteAccount, logout } = useAuthStore();

    async function handleDelete() {
        try {
            await deleteAccount();
            logout();
        } catch (err) {
            console.log(err.response?.data?.message || err.message)
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-[#1a1a1a] border border-red-500 p-8 rounded-xl shadow-lg text-white max-w-md w-full text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-red-500">⚠️ Danger Zone</h1>

                <p className="text-gray-300">
                    Deleting your account is permanent and <span className="text-red-400 font-medium">all your pastes will be erased</span>.
                </p>
                <p className="text-gray-400">Are you absolutely sure you want to continue?</p>

                <div className="flex justify-center gap-4">
                    <button onClick={handleDelete} disabled={isLoading} className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-md text-white font-medium border border-red-400 cursor-pointer">
                        {isLoading? 'Deleting...' : 'Delete Account'}
                    </button>
                    <Link to='/dashboard'>
                        <button className="bg-gray-700 hover:bg-cyan-600 transition px-5 py-2 rounded-md text-white font-medium border border-cyan-400 cursor-pointer">
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteAccount;
