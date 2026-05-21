"use client";
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { RiMenuLine } from "react-icons/ri";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 500) {
                setShow(true)
            } else {
                setShow(false)
            }
        };
        window.addEventListener("scroll", handlescroll)
    }, [])

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    return (
        <footer className='w-full h-auto bg-[#333] text-white py-7.5 px-17.5 text-center flex flex-col items-center justify-center'>
            {/* BACK TO TOP */}
            {show && (
                <motion.p
                    animate={{
                        y: [10, 0, 10],
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    onClick={backToTop}
                    className="fixed bottom-[2.5em] right-[1em] bg-[#333] text-white rounded-xl p-3 py-3.5 cursor-pointer font-semibold shadow-xl text-[.75em] z-777 hover:bg-blue-500"
                >
                    <FaArrowUp />
                </motion.p>
            )}

            <div className='w-full h-full flex items-center justify-between mb-4 max-[844px]:flex-col max-[844px]:gap-2'>
                <div className='max-[844px]:order-1'>
                    <h4 className='capitalize font-medium text-[1.5rem]'>Sanni <span className='text-blue-500'>Sodiq</span></h4>
                </div>

                <ul className='flex items-center max-[844px]:order-3'>
                    <li className='mr-4'><Link href="/#home">Home</Link></li>
                    <li className='mr-5'><Link href="/#services">Services</Link></li>
                    <li className='mr-4'><Link href="/#projects">Project</Link></li>
                    <li className='mr-4'><Link href="/#testimonial">Testimonial</Link></li>
                    <li className='mr-4'><Link href="/#contact">Contact</Link></li>
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
