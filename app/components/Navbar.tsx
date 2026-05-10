
import Link from 'next/link'
import { RiMenuLine } from "react-icons/ri";
import React from 'react'
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-white text-[#333] dark:bg-black dark:text-white h-auto py-5 px-20 flex items-center justify-between z-999 max-[795px]:px-7.5' style={{ boxShadow: "1px 0px 20px 1px rgba(19,20,20,0.1)" }}>
            <div className="font-semibold text-[21px] text-(--foreground)">Sanni <span className='text-blue-500'>Sodiq</span></div>
            <ul className="flex list-none z-999 mb-0 max-[728px]:hidden">
                <div className="hidden">
                    <i className="ri-close-line navClose"></i>
                </div>

                <li className='mr-5 text-[#333] dark:text-white'><Link href="/#home">Home</Link></li>
                <li className='mr-5 text-[#333] dark:text-white'><Link href="">Services</Link></li>
                <li className='mr-5 text-[#333] dark:text-white'><Link href="/#project">Project</Link></li>
                <li className='mr-5 text-[#333] dark:text-white'><Link href="">Testimonial</Link></li>
                <li className='mr-5 text-[#333] dark:text-white'><Link href="">Contact</Link></li>
            </ul>

            <div className='flex gap-2 items-center'>
                <ThemeToggle />
                <div className="hidden max-[728px]:block text-[#333] dark:text-white"><RiMenuLine className='text-2xl font-semibold cursor-pointer' /></div>
            </div>
        </nav>
    )
}

export default Navbar
