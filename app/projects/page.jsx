import ProjectContainer from "../components/ProjectContainer";

const page = async () => {
    async function getServices() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/serviceapi/`, {
            next: {
                revalidate: 60,
            },
        });

        return res.json();
    }
    const services = await getServices()
    return (
        <>
            <div className="pt-15"></div>
            <ProjectContainer services={services} />
        </>
    )
}

export default page