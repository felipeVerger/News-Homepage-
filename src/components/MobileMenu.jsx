import { navLinks } from '@/staticData'
import React from 'react'
import {GrClose} from 'react-icons/gr'

const MobileMenu = ({ setIsMenuOpen }) => {
  return (
    <div className='w-3/4 absolute right-0 top-0 bottom-0 bg-slate-50 flex flex-col py-4 px-6'>
        <GrClose className='text-4xl cursor-pointer self-end' onClick={() => setIsMenuOpen(false)}/>
        <div className='mt-20'>
            <ul className='flex flex-col gap-5'>
                {navLinks.map((link, i) => (
                    <li key={i} className="cursor-pointer font-sans font-semibold text-gray-900" >{link}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default MobileMenu