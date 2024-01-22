import React from 'react'

const Navbar = ({ navRef }) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='lg:w-10/12 flex justify-between items-center py-4 w-full' ref={navRef}>
            <div className='flex items-center gap-6'>
                <div className='font-bold text-2xl'>gustavocs</div>
                <ul className='hidden lg:flex lg:gap-6 list-none'>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div className='flex items-center'>
                <button className='p-2.5 rounded-lg px-4 bg-gradient-to-r from-primary to-pink-500'>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar