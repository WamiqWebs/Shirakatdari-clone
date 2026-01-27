"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen === true) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';
    }


    return (
        <section className="bg-[#162B18] border-b-6 border-[#00FF0D] md:py-2 px-5 sm:px-10 md:px-15 lg:px-20 lg:py-5">
            <div className="flex justify-between items-center w-full">

                {/* Logo */}
                <div className="py-3 md:py-0 text-3xl font-bold flex items-center text-[#00FF0D]">Shirkatdari</div>

                {/*Desktop Navigation Menu */}
                <ul className={`
                    lg:flex flex-col top-full left-0 w-full bg-[#162B18] z-50" hidden lg:flex-row items-center gap-x-3 lg:gap-x-7 list-none text-white font-bold z-10 justify-end
                `}>
                    <li className="relative group">
                        <a href="/" className="text-[#00FF0D]">Home</a>
                        <div className="absolute left-0 mt-0 w-40 bg-[#212635] rounded shadow-md 
                            opacity-0 invisible group-hover:visible group-hover:opacity-100 
                            transition-opacity duration-300 z-10">
                            <ul>
                                <li className="px-4 py-2 hover:text-[#00FF0D] cursor-pointer">
                                    <Link href="/aboutus">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link href="/howitworks" className="hover:text-[#00FF0D]">
                            How it Works
                        </Link>
                    </li>
                    <li>
                        <Link href="/service" className="hover:text-[#00FF0D]">Services</Link>
                    </li>
                    <li>
                        <Link href="/faq" className="hover:text-[#00FF0D]">FAQ's</Link>
                    </li>
                    <li>
                        <Link href="/howtopay" className="hover:text-[#00FF0D]">How to Pay</Link>
                    </li>
                    <li>
                        <Link href="/contactus" className="hover:text-[#00FF0D]">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/login" className="hover:text-[#00FF0D]">Login</Link>
                    </li>
                </ul>



                {/* Hamburger Icon (Mobile Only) */}
                <div className="flex items-center lg:hidden ml-auto">
                    <span
                        className="material-symbols-outlined text-white cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        menu
                    </span>
                </div>
            </div>


            {/* Mobile Navigation menu*/}
            {isOpen && (
                <ul className="bg-black absolute top-0 right-0 flex flex-col items-center justify-center w-full h-screen text-white gap-8 z-50 lg:hidden">
                    <span
                        onClick={() => { setIsOpen(!isOpen) }}
                        className="text-3xl cursor-pointer self-end mr-8">x</span>
                    <li className="relative group">
                        <a href="/" className="text-[#00FF0D]">Home</a>
                        <div className="absolute left-0 mt-0 w-40 bg-[#212635] rounded shadow-md 
                            opacity-0 invisible group-hover:visible group-hover:opacity-100 
                            transition-opacity duration-300 z-10">
                            <ul>
                                <li  onClick={()=>setIsOpen(!isOpen)} className="px-4 py-2 hover:text-[#00FF0D] cursor-pointer">
                                    <Link href="/aboutus">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li  onClick={()=>setIsOpen(!isOpen)}><Link href="/howitworks" className="hover:text-[#00FF0D]">How it Works</Link></li>
                    <li  onClick={()=>setIsOpen(!isOpen)}><Link href="/service" className="hover:text-[#00FF0D]">Services</Link></li>
                    <li  onClick={()=>setIsOpen(!isOpen)}><Link href="/faq" className="hover:text-[#00FF0D]">FAQ's</Link></li>
                    <li  onClick={()=>setIsOpen(!isOpen)}><Link href="/howtopay" className="hover:text-[#00FF0D]">How to Pay</Link></li>
                    <li  onClick={()=>setIsOpen(!isOpen)}><Link href="/contactus" className="hover:text-[#00FF0D]">Contact Us</Link></li>
                    <li  onClick={()=>setIsOpen(!isOpen)}><Link href="/login" className="hover:text-[#00FF0D]">Login</Link></li>
                </ul>
            )}
        </section>
    )
}
