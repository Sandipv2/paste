import { Link } from "react-router-dom"

function Home() {
  return (
    <div id='home-page' className='bg-gradient-to-br from-black to-cyan-800 min-h-screen flex justify-center items-center text-white px-5 md:px-0'>
      <div className='md:w-2/4 flex flex-col justify-center items-center gap-3'>
        <p className='text-xl font-bold'>Create. Share. Organise.</p>
        <h1 className='font-bold text-7xl text-cyan-500'>PASTE</h1>
        <p className='text-center font-bold'>A minimal and secure pastebin for storing quick notes, code snippets, and personal thoughts - accessible anywhere.</p>

        <div>
          <Link to='/register'>
            <button className='cursor-pointer border-2 w-[130px] border-cyan-500 rounded-full font-bold py-1 mt-5 hover:bg-cyan-500 hover:text-black hover:scale-95 active:bg-cyan-500 active:text-black active:scale-95 duration-300'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home