import { useForm } from 'react-hook-form';

import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../store/authStore';

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {signup} = useAuthStore();
  const navigate = useNavigate();

  async function onSubmit(e) {
    try {
      await signup(e.name, e.email, e.password);
      navigate('/verify-email');
    } catch(err) {  
      console.log(err.response.data.message || err.message);
    }
  }

  const password = watch('password');

  return (
    <div className="min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex items-center justify-center">
      <form className="w-full md:max-w-96 text-white flex flex-col gap-2 items-center" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold mb-7 text-3xl text-center">Create an account</h1>

        <div className='w-full'>
          <div className="flex items-center gap-2 border-2 border-white rounded-full px-3 py-2 text-white">
            <FaRegUser />
            <input type="text" className="outline-none w-full bg-transparent" placeholder="Name"
              {...register('name', {
                required: 'Field is required',
                minLength: { value: 3, message: 'Minimum length must be 3' }
              })}
            />
          </div>
          <p className="text-red-500 mt-3">{errors.name && errors.name.message}</p>
        </div>

        <div className='w-full'>
          <div className="flex items-center gap-2 border-2 border-white rounded-full px-3 py-2 text-white">
            <MdOutlineMail />
            <input type="text" className="outline-none w-full bg-transparent" placeholder="Email"
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
          className="bg-cyan-500 px-3 py-2 font-bold rounded-full cursor-pointer w-full hover:scale-95 duration-200 hover:bg-cyan-600 mt-7"
        >Register</button>

        <p className='mt-2 mb-3'>
          Already have an account? <Link to='/login' className='text-blue-600 underline'>Sign in here</Link>
        </p>

        <Link to='/'>
          <p className='text-blue-600 underline'>Go to home</p>
        </Link>
      </form>
    </div>
  )
}

export default Register    