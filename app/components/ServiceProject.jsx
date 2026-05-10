"use client";
import { useEffect, useState } from "react";
import { ProgramIcons } from "./ProgramIcons"
import { Playwrite_DE_SAS } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Project from "./Project";

const playwrite = Playwrite_DE_SAS({
    weight: ["400"]
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const ServiceContainer = ({ services }) => {
    const [active, setActive] = useState("All")

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const category = params.get("category")
        if (category) {
            setActive(category)
        }
    }, [])
    return (
        <>
            <section className="w-full h-auto pb-12 pt-12 px-22 max-[795px]:px-7.5 bg-white dark:bg-black">
                <div className="w-full h-full flex flex-col items-center">
                    <h4 className="text-[1.5rem] text-center font-bold text-[#333] dark:text-white">WHAT <span className="text-blue-500">I</span> DO</h4>
                    <p className={`text-center ${playwrite.className} text-[#333] dark:text-white`}>My <span className={`text-blue-500 ${roboto.className}`}>Services</span></p>
                    <div className="project-services whati_do w-full h-full flex flex-wrap gap-5 justify-center mt-6 ">
                        {!services ? (<p>Loading</p>) : (
                            services.length > 0 && (
                                services.map(ser => {
                                    const iconKey = ser.icon
                                    const Icon =
                                        ProgramIcons[iconKey]
                                    return (
                                        <div key={`services-${ser.id}`} className="w-82.5 h-auto py-2.5 px-3 rounded-2xl flex flex-col cursor-pointer transition-all duration-500 hover:scale-110 bg-white dark:bg-[#333] hover:shadow-xl">
                                            <div className="flex gap-3 items-center justify-start mb-2">
                                                {Icon && (
                                                    <Icon className="text-[33px] cursor-pointer text-[#333] dark:text-white transition-all ease-out -mr-1.5" />
                                                )}

                                                <h2 className="text-[1.2rem] text-centertext-[#333] dark:text-white font-semibold mt-1.5">{ser.name}</h2>
                                            </div>
                                            <div className="project-detail">
                                                <p className="text-left mb-1.5 text-[#333] dark:text-white">{ser.description}</p>
                                                <a href="" className="mt-4 text-blue-500 transition-all ease-out">View project <i className="ri-arrow-right-line"></i></a>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceContainer
