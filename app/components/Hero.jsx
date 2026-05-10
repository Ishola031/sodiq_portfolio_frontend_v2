"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion"
import { ProgramIcons } from "./ProgramIcons"
const Hero = () => {
    return (
        <>
            {/* HERO */}
            <section id="home" className="w-full h-auto px-22 pt-40 pb-7.5 max-[795px]:pt-30 max-[795px]:px-7.5 bg-white dark:bg-black">
                <div className="w-full h-[80%] max-h-[80%]">
                    <div className="w-full h-full flex items-center gap-10 max-[795px]:flex-col ">
                        <div className="w-[52%] h-full flex flex-col items-start justify-center max-[795px]:order-2 max-[795px]:w-full">
                            <motion.p className="text-3xl text-[#333] dark:text-white" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.2,
                            }}
                            ><span>Hello</span>,</motion.p>

                            <motion.h4 className="text-[5rem] font-semibold leading-17.5 bm-2 text-[#333] dark:text-white tracking-[-2px] mt-0 max-[948px]:text-[4.2rem] max-[948px]:leading-13" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                            >I'm <span className={`text-blue-500`}>Sodiq,</span></motion.h4>

                            <motion.h3 className="relative min-w-50 font-semibold text-[26px] mt-0 mb-2 text-[#333] dark:text-white" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.4,
                            }}>a <span className="auto-type text-blue-500">
                                    <TypeAnimation sequence={["Software Developer", 2000, "Graphics Designer", 2000]} wrapper="span" speed={50} repeat={Infinity} />
                                </span>
                            </motion.h3>

                            <motion.p className="mt-1.4 text-[15px] text-[#333] dark:text-white h-auto" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                            >I am a passionate Web Developer and Graphics Designer dedicated to creating digital
                                experiences that inspire. I help businesses and individuals bring their ideas to life through clean,
                                responsive websites and creative graphic designs. Let’s work together to build something that truly
                                stands out.
                            </motion.p>

                            <motion.div className="mt-0 flex gap-2.5 w-full py-2" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.6,
                            }}>
                                <div className="icon"><Link href="https://www.instagram.com/sodiq_concept?igsh=MXZsZzV0dG5wNXNuMA=="
                                    className=""><FaInstagram /></Link></div>
                                <div className="icon"><Link href="https://wa.link/zgx0cz" className=""><FaWhatsapp /></Link></div>
                                <div className="icon"><Link href="https://x.com/Sodiqconcept?t=Aq0O9ZhzBN5QAbJ5bEbJag&s=09" className=""><RiTwitterXFill /></Link></div>
                            </motion.div>

                            {/* <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.7,
                            }}><Link href="" className="hero-btn block relative w-35 py-2 px-4 bg-[#333] text-[#eee] dark:bg-white dark:text-[#333]  rounded-xl cursor-pointer mt-0 transition-all duration-500 ease-out text-[15px] text-center hover:scale-110" download>Download CV</Link>
                            </motion.div> */}
                        </div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0, 1, 0.8, 1] }} transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.7,
                        }} className="relative w-82.5 h-82.5 min-h-62.5 rounded-[50px] bg-[blue] mt-2.5 shadow-2xl max-[795px]:order-1">
                            <Image src="/profile.jpg" alt="My Profile" fill priority className="object-cover rounded-[50px]" />
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
