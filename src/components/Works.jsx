export default function Works() {
    return (
        <>
            <section className="w-screen ml-[calc(50%-50vw)] flex flex-col justify-center items-center">
                <h1 className="pt-15 text-center font-serif text-4xl font-[600]">How it works</h1>
                <div className="w-40 h-1 bg-[#00FF0D] mt-5"></div>

                <div className="flex justify-center items-center flex-wrap mt-5">
                    <div className="p-10 mx-1 my-2 rounded border-2 border-[#00FF0D] flex flex-col items-center justify-center">
                        <span className="material-symbols-outlined w-15 text-center text-[#00FF0D]">
                            computer
                        </span>
                        <h1 className="text-2xl font-serif font-[300]">Create an Account</h1>
                    </div>

                    <div className="p-10 mx-1 my-2 rounded border-2 border-[#00FF0D] flex flex-col items-center justify-center">
                        <span className="material-symbols-outlined w-15 text-center text-[#00FF0D]">
                            computer
                        </span>
                        <h1 className="text-2xl font-serif font-[300]">Create an Account</h1>
                    </div>

                    <div className="p-10 mx-1 my-2 border-2 rounded border-[#00FF0D] flex flex-col items-center justify-center">
                        <span className="material-symbols-outlined w-15 text-center text-[#00FF0D]">
                            computer
                        </span>
                        <h1 className="text-2xl font-serif font-[300]">Create an Account</h1>
                    </div>
                   
                </div>

                 <button className="m-5 bg-[#1bd225] hover:bg-[#00FF0D] rounded px-5 py-2 font-sans font-bold text-white">Create Account</button>
            </section>
        </>
    )
}