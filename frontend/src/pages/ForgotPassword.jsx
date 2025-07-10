import { useForm } from 'react-hook-form';

import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';

import { useAuthStore } from '../store/authStore';

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {forgotPassword} = useAuthStore();

    async function onSubmit(e) {
        try {
            await forgotPassword(e.email);
        } catch(err) {
            console.log(err.response?.data?.message || err.message)
        }
    }

    return (
        <div className="min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex items-center justify-center">
            <form className="w-full md:max-w-96 text-white flex flex-col gap-2 items-center" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold mb-7 text-3xl text-center">Reset Password</h1>
                <p>Enter registered email</p>
                <div className='w-full'>
                    <div className="flex items-center gap-2 border-2 border-white rounded-full px-3 py-2 text-white">
                        <MdOutlineMail />
                        <input type="text" className="outline-none w-full bg-transparent" placeholder="Email" autoComplete
                            {...register('email', {
                                required: 'Field is required',
                                minLength: { value: 8, message: 'Minimum length must be 8' },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                    </div>
                    <p className="text-red-500 mt-3">{errors.email && errors.email.message}</p>
                </div>

                <button type="submit"
                    className="bg-cyan-500 px-3 py-2 font-bold rounded-full cursor-pointer w-full hover:scale-95 duration-200 hover:bg-cyan-600 mt-7 active:bg-cyan-600 active:scale-95"
                >Send reset link</button>

                <p className='mt-2 mb-3'>
                    Don't have an account? <Link to='/register' className='text-blue-600 underline'>Sign up here</Link>
                </p>

                <Link to='/'>
                    <p className='text-blue-600 underline'>Go to home</p>
                </Link>
            </form>
        </div>
    )
}

export default ForgotPassword    