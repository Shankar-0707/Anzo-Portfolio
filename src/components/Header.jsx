import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 p-20 flex items-center justify-end'>
        <button className='bg-black px-9 py-2 text-white border-4 rounded-full hover:bg-gray-600 ml-24 '>
            Hire me  
        </button>

        <i className="ri-apps-fill text-3xl ml-3 text-gray-400"></i>
    </div>
  )
}

export default Header