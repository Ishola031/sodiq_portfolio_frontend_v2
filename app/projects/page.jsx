import { Suspense } from "react";
import ProjectContainer from "../components/ProjectContainer";
import Loading from "../components/loading";

const page = async () => {
    var serviceError = null

    async function getServices() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/serviceapi/`, {
                next: {
                    revalidate: 60,
                },
            });
            return res.json();
        } catch (error) {
            console.error(error)
            serviceError = "Something Went Wrong, Please try again later."
        }
    }

    const services = await getServices()
    return (
        <>
            <div className="pt-15"></div>
            <Suspense fallback={<Loading />}>
                <ProjectContainer services={services} serviceError={serviceError} />
            </Suspense>
        </>
    )
}

export default page