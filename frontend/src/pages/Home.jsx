import React from 'react'

function Home() {
  return (
    <div id='home-page' className='bg-gradient-to-br from-black to-cyan-800 min-h-screen flex justify-center items-center text-white px-5 md:px-0'>
        <div className='md:w-2/4 flex flex-col justify-center items-center gap-3'>
            <p className='text-xl font-bold'>Create. Share. Organise.</p>
            <h1 className='font-bold text-7xl text-cyan-500'>PASTE</h1>
            <p className='text-center font-bold'>A minimal and secure pastebin for storing quick notes, code snippets, and personal thoughts - accessible anywhere.</p>
        </div>
    </div>
  )
}

export default Home