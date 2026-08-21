'use client';
import React from 'react'
import { Playwrite_DE_SAS } from "next/font/google";
import { Roboto } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";
import { usePrograms } from '../hooks/useProgram'
import { ProgramIcons } from "../components/ProgramIcons"
import Loading from "./loading";
const playwrite = Playwrite_DE_SAS({
    weight: ["400"]
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const SkillContainer = () => {
    const { data: programs, isLoading } = usePrograms()

    return (
        <section className="w-full h-auto py-10 px-22 pt-10 max-[795px]:px-7.5 bg-white dark:bg-black">
            <div className="w-full h-full flex flex-col items-center">
                <h4 className="text-[1.5rem] text-center font-bold  text-[#333] dark:text-white">My Skills</h4>
                <p className={`${playwrite.className} text-[#333] dark:text-white`}>Technologies <span className={`text-blue-500 ${roboto.className} text-[18px]`}>I </span>Master</p>

                <div className="journey-box w-full h-full flex flex-wrap gap-5 justify-center mt-6">
                    {isLoading ? (
                        <div className="w-full h-50 flex items-center justify-center pt-10">
                            <Loading />
                        </div>
                    ) : (
                        programs?.length > 0 ? (
                            programs?.map(program => {
                                const iconKey = program.icon
                                const Icon = ProgramIcons[iconKey]
                                return (
                                    <div key={`program_${program?.id}`} className="min-w-70 w-80 h-auto shadow-sm flex items-center px-2 py-2.5 gap-1.5">
                                        <div className="">
                                            <Icon className="text-[25px]" />
                                        </div>

                                        <div className="w-full flex flex-col gap-0.5">
                                            <div className="w-full flex text-[13px] justify-between">
                                                <h3>{program?.name}</h3>
                                                <h3>{program?.skill}%</h3>
                                            </div>

                                            <div className="w-full">
                                                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden relative">
                                                    <div
                                                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                                                        style={{ width: `${program?.skill}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (<></>)
                    )}
                </div>
            </div>
        </section >
    )
}

export default SkillContainer
