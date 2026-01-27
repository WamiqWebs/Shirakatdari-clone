export default function Hero() {
    return (
        <>
            <section className=" w-screen ml-[calc(50%-50vw)] bg-gradient-to-r from-[#172C19] to-[#204C23]  py-15 px-5 sm:px-10 md:px-15 lg:px-20 md:py-15 lg:py-20 ">

                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                    <div className="py-5 md:py-2 lg:py-7 xl:py-10">
                        <h1 className="text-white font-medium font-serif text-3xl lg:text-4xl xl:text-5xl">Shirakatdari</h1>
                        <div className="w-20 h-1 bg-[#00FF0D] mt-5 ">

                        </div>
                        <div className="py-5 text-2xl font-medium">
                            <span className="text-white ">Welcome to Shirakatdari.com – Fractional Gold Ownership Made Easy</span>
                        </div>
                        <a href="" className="mt-5">
                            <button className="px-8 py-2 border-3 border-[#00FF0D] rounded font-extrabold font-sans text-white bg-[#1B391D]">Lets Start</button>
                        </a>
                    </div>


                    <div className="flex justify-center items-center">
                        <img src="img-gold (1).jpg" alt="gold" className="w-[100%]" />
                    </div>
                </section>
            </section>
        </>
    )
}