"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function Login() {
  // ✅ State me email + password
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };

    getUser();
  }, []);


  // -------------------- Login --------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Email or password missing!");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginData.email.trim(),
      password: loginData.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    toast.success("Login successful");
    window.location.href = "/dashboard";
  }


  // -------------------- Signup --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Email or password missing!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: loginData.email.trim(),
      password: loginData.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    toast.success("Account created! Check your email to verify.");

    setLoginData({
      email: "",
      password: "",
    });
  };


  // -------------------- Input change --------------------
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  // -------------------- UI --------------------
  return (
    <section className="bg-[#F7F7F7] flex justify-center items-center w-screen ml-[calc(50%-50vw)] py-10">
      <form className="rounded-2xl p-10 flex flex-col justify-center items-center bg-white">
        Profile : {user?.email || "No user logged in"}

        <h1 className="font-serif text-5xl text-center mb-5">Login</h1>

        {/* Email input */}
        <div className="mt-5 flex flex-col">
          <label className="font-[600] text-[#6E6A6A]">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            className="h-10 rounded sm:w-[100%] lg:w-[480px] border-1 border-gray-400 pl-2 text-[#595555]"
            required
          />
        </div>

        {/* Password input */}
        <div className="mt-5 flex flex-col">
          <label className="font-[600] text-[#6E6A6A]">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="h-10 rounded sm:w-[100%] lg:w-[480px] border-1 border-gray-400 pl-2 text-[#595555]"
            required
          />
        </div>

        {/* Keep me signed in */}
        <div className="my-5 flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-2 rounded-none border-[#00FF0D] checked:bg-[#00FF0D] appearance-none"
          />
          <p className="pl-5 text-[#6E6A6A]">Keep me signed in</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-2 md:gap-4 lg:gap-x-10 flex-wrap h-auto w-[100%]">
          <button
            type="button"
            onClick={handleLogin}
            className="py-2 px-5 md:px-10 lg:px-20 bg-green-950 hover:bg-[#00FF0D] text-white rounded"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="py-2 px-5 md:px-10 lg:px-20 bg-gray-400 hover:bg-gray-500 text-white rounded"
          >
            Sign Up
          </button>
        </div>

        {/* Forgot password */}
        <Link href="/extra" className="flex justify-center items-center mt-5 text-gray-500">
          Forgot your password?
        </Link>
      </form>
    </section>
  )
}
