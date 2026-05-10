"use client";
import React from 'react'
import { motion } from "framer-motion"
import { RiMenuLine } from "react-icons/ri";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full h-auto bg-[#333] text-white py-7.5 px-17.5 text-center flex flex-col items-center justify-center'>
            {/* BACK TO TOP */}
            <motion.a href=''
                animate={{
                    y: [10, 0, 10],
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="fixed bottom-[2.5em] right-[1em] bg-[#333] text-white rounded-xl p-3 py-4 cursor-pointer font-semibold shadow-xl text-[.75em] z-777"
            >
                <FaArrowUp />
            </motion.a>

            <div className='w-full h-full flex items-center justify-between mb-4 max-[844px]:flex-col max-[844px]:gap-2'>
                <div className='max-[844px]:order-1'>
                    <h4 className='capitalize font-medium text-[1.5rem]'>Sanni <span className='text-blue-500'>Sodiq</span></h4>
                </div>

                <ul className='flex items-center max-[844px]:order-3'>
                    <li className='mr-4'><Link href="">Home</Link></li>
                    <li className='mr-5'><Link href="">Services</Link></li>
                    <li className='mr-4'><Link href="">Project</Link></li>
                    <li className='mr-4'><Link href="">Testimonial</Link></li>
                    <li className='mr-4'><Link href="">Contact</Link></li>
                </ul>

                <div className='max-[844px]:order-2'>
                    <div className="icon mr-0.5"><Link href="https://www.instagram.com/sodiq_concept?igsh=MXZsZzV0dG5wNXNuMA=="
                        className=""><FaInstagram /></Link></div>
                    <div className="icon mr-0.5"><Link href="https://wa.link/zgx0cz" className=""><FaWhatsapp /></Link></div>
                    <div className="icon mr-0.5"><Link href="https://x.com/Sodiqconcept?t=Aq0O9ZhzBN5QAbJ5bEbJag&s=09" className=""><RiTwitterXFill /></Link></div>
                </div>
            </div>
            <p>Sodiq Sanni | All rights reserved.</p>
        </footer>
    )
}

export default Footer
