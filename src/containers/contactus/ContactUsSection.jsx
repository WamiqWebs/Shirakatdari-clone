"use client";
import ContactUsForm from "@/components/contactus/ContactUsForm";

export default function ContactUsSection() {

    return (
        <>
            <div className="flex flex-col justify-center h-auto items-center pt-10 pb-5 text-center">
                <h1 className="font-serif text-4xl lg:text-5xl">Contact Us</h1>
                <div className="w-40 h-1 my-5 bg-amber-300"></div>
            </div>

            <section className="w-screen ml-[calc(50%-50vw)] h-auto flex flex-col lg:flex-row justify-center items-center pb-15 pt-10 bg-[#F7F7F7] lg:px-22">
                {/* Contact Info Box */}
                <div className="w-[88%] lg:w-[500px] min-h-[500px] flex flex-col p-10 bg-[#162B18] rounded-2xl border-[#00FF0D] text-white overflow-hidden">
                    <h1 className="text-3xl text-center">Contact Information</h1>
                    <p className="pb-10 text-center lg:text-left">Say something to start a live chat!</p>
                    <li className="pt-5 list-none">✉ info@shirakatdari.com</li>
                    <li className="pt-5 list-none">📞 +92 336 9737199</li>
                    <li className="pt-5 list-none">🔴 Lahore, Pakistan</li>

                    <div className="w-25 pt-5 flex justify-center items-center gap-3">
                        <a href="https://www.facebook.com/">
                            <img src="/facebook.png" alt="facebook" className="w-6" />
                        </a>
                        <a href="https://x.com/">
                            <img src="/twitter.png" alt="twitter" className="w-7" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src="/youtube.png" alt="youtube" className="w-7" />
                        </a>
                    </div>

                    {/* Background bubbles */}
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-[-150px] right-[-20px] h-20 w-20 animate-bounce bg-gray-500/50 rounded-full pointer-events-none"></div>
                        <div className="w-40 h-40 absolute bottom-[-240px] right-[-100px] animate-pulse bg-gray-500/50 rounded-full pointer-events-none"></div>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactUsForm />
            </section>
        </>
    );
}