'use client'
import { useState } from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { Playwrite_DE_SAS } from "next/font/google";
import { Roboto } from "next/font/google";
import axios from 'axios';

const playwrite = Playwrite_DE_SAS({
    weight: ["400"]
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});


const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [alerts, setAlert] = useState(false);
    const [form, setForm] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "number": "",
        "message": "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/sendEmail/`,
                form
            );
            console.log(res.data);
            setForm({
                "firstName": "",
                "lastName": "",
                "email": "",
                "number": "",
                "message": "",
            })
            setAlert("Message sent successfully!");

        } catch (error) {
            console.error(error);
            setAlert("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id='contact' className="w-full h-auto pb-11 pt-25 px-22 max-[795px]:px-7.5 bg-white dark:bg-black">
                <div className="w-full h-full flex flex-col items-center">
                    <h4 className={`text-[1.6rem] text-center font-medium ${playwrite.className} `}>Contact <span className={`text-blue-500 ${roboto.className}`}>Me</span></h4>
                    <div className="w-full flex gap-16 max-[942px]:flex-col max-[942px]:gap-3">
                        <div className="mt-5 w-[25%] max-[942px]:order-2 max-[942px]:w-full">
                            <div className="w-auto flex mb-4 items-center justify-start">
                                <div>
                                    <BsWhatsapp className="ri-mail-line text-[33px] cursor-pointer mr-1.5" />
                                </div>
                                <div className="leading-4">
                                    <h2>Email</h2>
                                    <p>sannisodiq031@gmail.com</p>
                                </div>
                            </div>
                            <div className="w-auto flex mb-4 items-center justify-start">
                                <div>
                                    <BsWhatsapp className="ri-mail-line text-[33px] cursor-pointer mr-1.5" />
                                </div>
                                <div className="leading-4">
                                    <h2>WhatsApp</h2>
                                    <p>+234915953370</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="w-[75%] flex flex-col mt-2.5 my-0 mx-auto max-[942px]:order-1 max-[942px]:w-full">
                            <div className="w-full flex my-5 max-[550px]:flex-col ">
                                <div className="w-full h-auto relative gap-6 mr-3 max-[550px]:mb-7">
                                    <input type="text" onChange={(e) => setForm(f => ({ ...f, "firstName": e.target.value }))} id="firstname" name="firstname" required className="w-full py-3 px-3 border-0 outline-0 rounded-xl bg-[#eee] dark:text-[#333]" />
                                    <label htmlFor="firstname" className="absolute left-2 -top-5 text-[14px] pointer-events-none">First Name</label>
                                </div>
                                <div className="w-full h-auto relative gap-6">
                                    <input type="text" id="lastname" name="lastname" required className="w-full py-3 px-3 border-0 outline-0 rounded-xl bg-[#eee] dark:text-[#333]" />
                                    <label htmlFor="lastname" onChange={(e) => setForm(f => ({ ...f, "lastName": e.target.value }))} className="absolute left-2 -top-5 text-[14px] pointer-events-none">Last Name</label>
                                </div>
                            </div>
                            <div className="w-full flex mt-2 mb-5 max-[550px]:flex-col">
                                <div className="w-full h-auto relative gap-6 mr-3 max-[550px]:mb-7">
                                    <input type="email" id="email" name="email" onChange={(e) => setForm(f => ({ ...f, "email": e.target.value }))} required className="w-full py-3 px-3 border-0 outline-0 rounded-xl bg-[#eee] dark:text-[#333]" />
                                    <label htmlFor="email" className="absolute left-2 -top-5 text-[14px] pointer-events-none">Email</label>
                                </div>
                                <div className="w-full h-auto relative gap-6">
                                    <input type="number" id="number" name="number" onChange={(e) => setForm(f => ({ ...f, "number": e.target.value }))} required className="w-full py-3 px-3 border-0 outline-0 rounded-xl bg-[#eee] dark:text-[#333]" />
                                    <label htmlFor="number" className="absolute left-2 -top-5 text-[14px] pointer-events-none">Phone Number</label>
                                </div>
                            </div>
                            <div className="w-full flex my-2">
                                <div className="w-full h-auto relative gap-6">
                                    <textarea name="message" id="message" onChange={(e) => setForm(f => ({ ...f, "message": e.target.value }))} required className="w-full py-2 px-3 border-0 outline-0 rounded-xl bg-[#eee] dark:text-[#333]"></textarea>
                                    <label htmlFor="message" className="absolute left-2 -top-5 text-[14px] pointer-events-none">Message</label>
                                </div>
                            </div>
                            <p className="text-green-500">{alerts}</p>
                            <button type="submit" className="w-42.5 py-3 px-2.5 border-0 outline-0 text-[#eee] bg-[#333] rounded-2xl cursor-pointer text-[14px] transition-all duration-500 hover:scale-110" disabled={loading}>
                                {loading ? (
                                    'loading'
                                ) : (
                                    <>
                                        <i className="ri-send-plane-2-line"></i>Send a
                                        message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact
