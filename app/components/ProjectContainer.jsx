"use client";
import { useEffect, useState } from "react";
import { ProgramIcons } from "./ProgramIcons"
import { Playwrite_DE_SAS } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Project from "./Project";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

const playwrite = Playwrite_DE_SAS({
    weight: ["400"]
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const ProjectContainer = ({ services }) => {
    const [allProjects, setAllProjects] = useState([]);
    const [page, setPage] = useState(1)
    const pathname = usePathname();
    const isHomePage = pathname === "/"
    const router = useRouter();
    const [changingCategory, setChangingCategory] = useState(true);
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "All";
    const active = category;

    const url = category === "All"
        ? `http://127.0.0.1:8000/api/projectapi/?page=${page}`
        : `http://127.0.0.1:8000/api/projectapi/?category=${category}&page=${page}`;

    const { data, error, isLoading, isValidating } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        keepPreviousData: true,
    });

    const projects = allProjects;

    useEffect(() => {
        setAllProjects([]);
        setPage(1);
    }, [category]);

    if (error) {
        return (
            <div className="text-red-500 mt-10">
                Failed to load projects. Please try again.
            </div>
        );
    }

    useEffect(() => {
        if (data) {
            setChangingCategory(false);
        }
    }, [projects]);

    useEffect(() => {
        console.log("hi")
        if (data?.results) {
            setAllProjects(prev => {
                const ids = new Set(prev.map(p => p.id));

                const newProjects = data.results.filter(
                    p => !ids.has(p.id)
                );

                return [...prev, ...newProjects];
            });
        }
    }, [data]);

    return (
        <>
            {/* My Project */}
            <section className="w-full h-auto py-12 px-22 max-[795px]:px-7.5 bg-white dark:bg-black" id="project">
                <div className="w-full h-full flex flex-col items-center">
                    <h4 className={`${roboto.className} text-[1.5rem] font-medium`}><span className={`${playwrite.className} text-5.5 text-blue-500`}>My</span> Project</h4>
                    <div className="flex flex-wrap justify-center gap-2 my-2.5 mt-2.5">
                        <button onClick={() => {
                            if (active !== `All`) {
                                setChangingCategory(true);
                                if (pathname === "/") {
                                    router.replace("/", { scroll: false });
                                } else {
                                    router.replace("/projects", { scroll: false });
                                }
                            }
                        }} className={`w-auto h-auto py-1 px-3.5  cursor-pointer  rounded-lg text-[14px] ${active === "All" ? "bg-[#333] text-white dark:bg-white dark:text-[#333]" : "bg-white text-[#333] dark:bg-black dark:text-white"}`}>All</button>
                        {services.map(ser => {
                            return (
                                <button key={`btn-${ser.id}`}
                                    onClick={() => {
                                        if (active !== `${ser.slug}`) {
                                            setChangingCategory(true);
                                            if (pathname === "/") {
                                                router.replace(`/?category=${ser.slug}`, { scroll: false });
                                            } else {
                                                router.replace(`/projects/?category=${ser.slug}`, { scroll: false });
                                            }
                                        }
                                    }}
                                    className={`w-auto h-auto py-1 px-3.5 rounded-lg text-[14px] cursor-pointer ${active === `${ser.slug}`
                                        ? "bg-[#333] text-white"
                                        : "bg-white text-[#333] dark:bg-black dark:text-white"
                                        }`}>
                                    {ser.name}
                                </button>
                            )
                        })}
                    </div>

                    <div className="w-full h-full flex flex-wrap gap-7 justify-center ">
                        {projects.length > 0 ? (
                            <>
                                {projects.map(project => {
                                    return (
                                        <Project key={`project-${project.id}`} project={project} />
                                    )
                                })}

                            </>
                        ) : (!isLoading && !changingCategory && (<p>No Project</p>))}

                    </div>
                    {changingCategory && (<p>Loading</p>)}
                    {!isLoading && data?.next && (
                        isHomePage ? (
                            <Link href="/projects" className="mt-8">View More</Link>
                        ) : (
                            <button className="mt-8 cursor-pointer" onClick={() => {
                                setPage(p => p + 1)
                                setChangingCategory(true);
                            }}>Show More</button>
                        )
                    )}
                </div>
            </section>
        </>
    )
}

export default ProjectContainer
