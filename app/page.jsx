import Image from "next/image";
import { Playwrite_DE_SAS } from "next/font/google";
import { Roboto } from "next/font/google";
import Hero from "./components/Hero"
import ServiceContainer from "./components/ServiceProject";
import ProjectContainer from "./components/ProjectContainer";
import Contact from "./components/Contact"
const playwrite = Playwrite_DE_SAS({
  weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default async function Home() {
  async function getServices() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/serviceapi/`, {
      next: {
        revalidate: 60,
      },
    });

    return res.json();
  }
  const services = await getServices()

  const handleSubmit = async () => {
    try {

    } catch (error) {

    } finally {

    }
  };
  return (
    <>
      <Hero />

      {/* EXPERIENCE */}
      <section className="w-full h-auto py-10 px-22 max-[795px]:pt-40 max-[795px]:px-7.5 bg-white dark:bg-black">
        <div className="w-full h-full flex flex-col items-center">
          <h4 className="text-[1.5rem] text-center font-bold  text-[#333] dark:text-white">EXPERIENCE</h4>
          <p className={`${playwrite.className} text-[#333] dark:text-white`}>My <span className={`text-blue-500 ${roboto.className}`}>Journey</span></p>
          <div className="journey-box w-full h-full flex flex-wrap gap-6.25 justify-center mt-6">
            <div className="w-100 h-auto p-4 border-2 border-blue-500 rounded-3xl relative cursor-pointer transition-all duration-900 ease-out hover:scale-105 ">
              <h3 className="text-5 mb-1.9 absolute -top-3.75 px-2 font-bold text-[19px] bg-white dark:bg-black">2020-2022</h3>
              <h4 className="text-left text-5 mb-2.5 mt-2.4 font-semibold text-[20px] leading-6 text-[#333] dark:text-white">GRAPHICS DESIGNER, YUSCO PUBLICITY</h4>
              <ul>
                <li className="mb-2.5 text-[15px] text-[#333] dark:text-white">- Developed creative brand visuals for various clients, including logos, flyers.</li>
                <li className="mb-2.5 text-[15px] text-[#333] dark:text-white">- Designed engaging social media graphics and banners using Adobe Photoshop.
                </li>
                <li className="mb-2.5 text-[15px] text-[#333] dark:text-white">- Handled multiple design projects efficiently while meeting deadlines and maintaining
                  top-quality results.</li>

              </ul>
            </div>
            <div className="w-100 h-auto p-4 border-2 border-blue-500 rounded-3xl relative cursor-pointer transition-all duration-900 ease-out hover:scale-105">
              <h3 className="text-5 mb-1.9 absolute -top-3.75 px-2 font-bold text-[19px] bg-white dark:bg-black">2023-2025</h3>
              <h4 className="text-left text-5 mb-2.5 mt-2.4 font-semibold text-[20px] leading-6 text-[#333] dark:text-white">WEB DEVELOPER, SOLUTECH CITY</h4>
              <ul>
                <li className="mb-2.5 text-[15px] text-[#333] dark:text-white">- Built responsive and interactive websites using HTML, CSS, and JavaScript to ensure a smooth
                  user experience across all devices.</li>
                <li className="mb-2.5 text-[15px] text-[#333] dark:text-white">- Partnered with designers to transform visual concepts into dynamic, functional web pages.</li>
                <li className="mb-2.5 text-[15px] text-[#333] dark:text-white">- Integrated modern frameworks and libraries to enhance website performance and user
                  engagement.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <ServiceContainer services={services} />

      <ProjectContainer services={services} />

      {/* What People Say */}
      <section className="w-full h-auto py-4 px-22 max-[795px]:px-7.5 bg-white dark:bg-black">
        <div className="w-full h-full flex flex-col items-center">
          <h4 className={`text-[1.6rem] text-center font-medium text-[#333] dark:text-white`}>What <span className="text-blue-500">People</span> Say </h4>
          <p className={`${playwrite.className} text-center text-[#333] dark:text-white`}>My <span className={`${roboto.className} text-blue-500`}>Testimonials</span></p>
          <div className="w-full h-full flex flex-wrap gap-7 justify-center mt-6">
            <div className="w-87.5 h-57.5 border-2 border-blue-500 border-l-6 rounded-2xl shadow-2xl relative py-6 px-4">
              <Image src="/testimonial/olao.jpg" alt="" width={20} height={19.5} className="w-20 h-19.5 rounded-[50%] mb-2.5 border-blue-500 border-l-2 border-r-2" />
              <h4 className="text-2xl text-left mb-2.5 font-medium text-[#333] dark:text-white">Kehinde Sanni</h4>
              <p className="text-[13px] text-[#333] dark:text-white">Sodiq built a functional and attractive web app for our business. He’s creative, reliable, and
                delivers exactly what he promises.</p>

            </div>
            <div className="w-87.5 h-57.5 border-2 border-blue-500 border-l-6 rounded-2xl shadow-2xl relative py-6 px-4">
              <img src="/testimonial/saheed.jpg" alt="" width={20} height={19.5} className="w-20 h-19.5 rounded-[50%] mb-2.5 border-blue-500 border-l-2 border-r-2" />
              <h4 className="text-2xl text-left mb-2.5 font-medium text-[#333] dark:text-white">Saheed Olatunji</h4>
              <p className="text-[13px] text-[#333] dark:text-white">He nailed our logo design perfectly. Creative and easy to work with.</p>

            </div>
            <div className="w-87.5 h-57.5 border-2 border-blue-500 border-l-6 rounded-2xl shadow-2xl relative py-6 px-4">
              <img src="/testimonial/isila.jpg" alt="" width={20} height={19.5} className="w-20 h-19.5 rounded-[50%] mb-2.5 border-blue-500 border-l-2 border-r-2" />
              <h4 className="text-2xl text-left mb-2.5 font-medium text-[#333] dark:text-white">Isilamiyah Sanni</h4>
              <p className="text-[13px] text-[#333] dark:text-white">He handled our branding and website from start to finish — flawless work.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <Contact />

    </>
  );
}
