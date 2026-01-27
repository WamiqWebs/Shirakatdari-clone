export default function Footer() {
    return (
        <>
            <section className="">
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 text-white bg-[#162B18] sm:px-10 md:px-15 lg:px-20">
                    <div className="max-w-[80%] md:max-w-[90%] lg:max-w-[80%] p-5 pb-10 sm:p-0">
                        <h1 className="text-3xl font-serif font-bold">Shirkatdari</h1>
                        <h1 className="font-medium pt-5">Our networks are managed from our London offices. Our live service is hosted in the cloud.</h1>
                        <div className="w-25 pt-5 flex justify-center items-center gap-3">
                            <a href="https://www.facebook.com/">
                                <img src="/facebook.png" alt="facebook" className="w-6" />
                            </a>
                            <a href="https://x.com/">
                                <img src="/twitter.png" alt="facebook" className="w-7" />
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src="/youtube.png" alt="facebook" className="w-7" />
                            </a>
                        </div>
                    </div>

                    <div className="pl-5 sm:p-0 lg:pl-20 sm:mt-5 md:mt-0 pr-5 max-w-[80%] w-100 pb-10 list-none">
                        <li className="text-2xl font-medium">Quick Links</li>
                        <li className="pt-5 font-semibold">Home</li>
                        <li className="pt-5 font-semibold">About Us</li>
                        <li className="pt-5 font-semibold">FAQ's</li>
                        <li className="pt-5 font-semibold">Contact Us</li>
                    </div>

                    <div className=" pb-10 pr-10 pl-5 sm:mt-5 max-w-[80%] sm:p-0 w-100 list-none">
                        <li className="text-2xl font-bold">Contact Us</li>
                        <li className="pt-5 font-semibold">✉ info@shirakatdari.com</li>
                        <li className="pt-5 font-semibold">📞 +92 336 9737199</li>
                        <li className="pt-5 font-semibold">🔴 Lahore, Pakistan</li>
                    </div>

                </div>
                
                <div className="flex justify-center items-center font-semibold bg-black flex-wrap p-2">
                    <div className="pt-2 pb-3 text-white flex justify-center">©2024 Shirakatdari |</div>
                    <div className="pl-1 pt-2 pb-3 flex justify-center text-red-500 hover:text-[#2C3365]">Powered by NexaForge Technologies</div>
                </div>
            </section>
        </>
    )
}