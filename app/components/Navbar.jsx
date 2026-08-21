'use client';
import Link from 'next/link'
import { RiMenuLine } from "react-icons/ri";
import React, { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle';
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    // const scrollToScroll = (id) => {
    //     const element = document.getElementById(id);
    //     if (!element) return;
    //     const navbar = document.getElementById().getBoundingClientRect().height
    //     const top = element.getBoundingClientRect().height - navbar
    //     window.scrollTo({
    //         top,
    //         behavior: "smooth",
    //     })
    // };
    const sidebarRef = useRef(null)

    useEffect(() => {
        const handleSidebarClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSidebar(false)
            }
        };
        document.addEventListener('mousedown', handleSidebarClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleSidebarClickOutside)
        };
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }

        setShowSidebar(false)
    };

    return (
        <nav className='fixed top-0 left-0 w-full bg-white text-[#333] dark:bg-black dark:text-white h-auto py-3 px-20 flex items-center justify-between z-999 max-[795px]:px-7.5' style={{ boxShadow: "1px 0px 20px 1px rgba(19,20,20,0.1)" }}>
            <Link href={'/'} className="font-semibold text-[21px] text-(--foreground)">Sanni <span className='text-blue-500'>Sodiq</span></Link>

            <div ref={sidebarRef} className={`flex z-999 mb-0 ${showSidebar ? 'right-0' : '-right-full'} max-[728px]:flex-col max-[728px]:top-0 max-[728px]:absolute  max-[728px]:w-[70%] max-[728px]:h-screen  transistion-all duration-500 max-[728px]:bg-[#333]`}>
                <div className="hidden max-[728px]:flex w-full relative">
                    <IoMdClose className='text-white text-2xl cursor-pointer absolute right-0 top-0 max-[728px]:mx-4 my-2' onClick={() => setShowSidebar(false)} />
                </div>

                <ul className='list-none flex max-[728px]:flex-col max-[728px]:mt-10'>
                    <li className='mr-5 text-[#333] dark:text-white max-[728px]:p-2.5 max-[728px]:text-white max-[728px]:hover:bg-white max-[728px]:hover:text-[#333] transistion=all duration-500 max-[728px]:mb-1 max-[728px]:pl-4'><Link href="/#home" onClick={() => scrollToSection("home")} className='max-[728px]:block'>Home</Link></li>
                    <li className='mr-5 text-[#333] dark:text-white max-[728px]:p-2.5 max-[728px]:text-white max-[728px]:hover:bg-white max-[728px]:hover:text-[#333] transistion=all duration-500 max-[728px]:mb-1 max-[728px]:pl-4'><Link href="/#services" onClick={() => scrollToSection("services")} className='max-[728px]:block'>Services</Link></li>
                    <li className='mr-5 text-[#333] dark:text-white max-[728px]:p-2.5 max-[728px]:text-white max-[728px]:hover:bg-white max-[728px]:hover:text-[#333] transistion=all duration-500 max-[728px]:mb-1 max-[728px]:pl-4'><Link href="/#projects" onClick={() => scrollToSection("projects")} className='max-[728px]:block'>Project</Link></li>
                    <li className='mr-5 text-[#333] dark:text-white max-[728px]:p-2.5 max-[728px]:text-white max-[728px]:hover:bg-white max-[728px]:hover:text-[#333] transistion=all duration-500 max-[728px]:mb-1 max-[728px]:pl-4'><Link href="/#testimonial" onClick={() => scrollToSection("testimonail")} className='max-[728px]:block'>Testimonial</Link></li>
                    <li className='mr-5 text-[#333] dark:text-white max-[728px]:p-2.5 max-[728px]:text-white max-[728px]:hover:bg-white max-[728px]:hover:text-[#333] transistion=all duration-500 max-[728px]:mb-1 max-[728px]:pl-4'><Link href="/#contact" onClick={() => scrollToSection("contact")} className='max-[728px]:block'>Contact</Link></li>
                </ul>
            </div>

            <div className='flex gap-2 items-center'>
                <ThemeToggle />
                <div className="hidden max-[728px]:block text-[#333] dark:text-white"><RiMenuLine className='text-2xl font-semibold cursor-pointer' onClick={() => setShowSidebar(true)} /></div>
            </div>
        </nav>
    )
}

export default Navbar
