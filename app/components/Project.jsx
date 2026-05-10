import React from 'react'
import Image from "next/image";
import { ProgramIcons } from "../components/ProgramIcons"

const Project = ({ project }) => {

    const getCloudinaryImage = (path) => {
        if (!path) return
        return `https://res.cloudinary.com/dungqgddc/${path.replace(
            "upload/",
            "upload/w_800,q_auto,f_auto/"
        )}`
    }


    return (
        <>
            <div key={`project-${project.id}`} className="w-80 h-auto py-2.5 px-3 rounded-xl cursor-pointer transition-all duration-700 hover:scale-110 hover:shadow-xl ">
                <Image
                    src={getCloudinaryImage(project?.image)}
                    alt={`${project?.name}`}
                    width={800}
                    height={400}
                    priority
                    className="w-full h-47.5 rounded-2xl mt-0.5 mb-2.5 object-cover"
                />
                <div>
                    <h2 className="text-[1.1rem] text-left text-[#333] dark:text-white font-semibold"> {project?.name}</h2>
                    <p className="text-[15px] leading-4.5 text-[#333] dark:text-white">{project?.description}</p>
                </div>
                <div className="flex gap-1.5 py-1 flex-wrap">
                    {project.program.length > 0 && (
                        project.program.map(pgm => {
                            const iconKey = pgm.icon
                            const Icon =
                                ProgramIcons[iconKey]
                            return (
                                <div key={`pjpgm-${pgm.id}`} className={`w-auto h-auto py-1 px-2  cursor-pointer  rounded-lg text-[14px] bg-[#333] text-white flex gap-1 items-center dark:bg-white dark:text-[#333]`}><Icon className="text-[19px]" /> {pgm.name}</div>
                            )
                        })
                    )}
                </div>

            </div>
        </>
    )
}

export default Project