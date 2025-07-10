import { TbLockPassword } from "react-icons/tb";

import { useForm } from "react-hook-form"
import { useAuthStore } from "../store/authStore";
import { useParams, useNavigate } from "react-router-dom";


function ResetPassword() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { resetPassword, isLoading } = useAuthStore();
    const { token } = useParams();

    const navigate = useNavigate();

    async function onSubmit(e) {
        try {
            await resetPassword(token, e.password)
            navigate('/login');
        } catch (err) {
            console.log(err.response?.data?.message || err.message)
        }
    }

    const password = watch('password');

    return (
        <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center items-center'>
            <form className="w-full md:max-w-96 text-white flex flex-col gap-2 items-center" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold mb-7 text-3xl text-center">Set new password</h1>
                <div className='w-full'>
                    <div className="flex items-center gap-2 border-2 border-white rounded-full px-3 py-2 text-white">
                        <TbLockPassword />
                        <input type="password" className="outline-none w-full bg-transparent" placeholder="Password" autoComplete='off'
                            {...register('password', {
                                required: 'Field is required',
                                minLength: { value: 6, message: 'Minimum length is 6' },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{6,}$/,
                                    message: 'Must include uppercase, lowercase, number, and special char',
                                },
                            })}
                        />
                    </div>
                    <p className="text-red-500 mt-3">{errors.password && errors.password.message}</p>
                </div>

                <div className='w-full'>
                    <div className="flex items-center gap-2 border-2 border-white rounded-full px-3 py-2 text-white">
                        <TbLockPassword />
                        <input type="password" className="outline-none w-full bg-transparent" placeholder="Confirm Password" autoComplete='off'
                            {...register('confirmPassword', {
                                required: 'Field is required',
                                validate: value => value === password || 'Password do not match'
                            })}
                        />
                    </div>
                    <p className="text-red-500 mt-3">{errors.confirmPassword && errors.confirmPassword.message}</p>
                </div>

                <button type="submit"
                    disabled={isLoading}
                    className="bg-cyan-500 px-3 py-2 font-bold rounded-full cursor-pointer w-full hover:scale-95 duration-200 hover:bg-cyan-600 mt-7 active:bg-cyan-600 active:scale-95"
                >{isLoading ? 'Resetting...' : 'Reset Password'}</button>
            </form>
        </div>
    )
}

export default ResetPassword