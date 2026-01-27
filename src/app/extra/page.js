"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function NewPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Supabase token jo email link me aayega
  const accessToken = searchParams.get("access_token");

  const handleUpdatePassword = async () => {
    if (!password) {
      toast.error("Enter new password");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password: password,
    }, accessToken ? { accessToken } : {});

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password updated successfully!");
      router.push("/login"); // login page pe redirect
    }
  };

  return (
    <div className="w-screen ml-[calc(50%-50vw)] overflow-x-hidden flex justify-center items-center py-10 bg-[#F0F0F0]">
      <div className="bg-white p-10 rounded w-[80%] lg:w-[40%] flex flex-col items-center">
        <h1 className="text-4xl font-serif mb-5">Set New Password</h1>
        <input
          type="password"
          placeholder="Enter new password"
          className="border p-2 w-full rounded mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleUpdatePassword}
          className="px-5 py-2 bg-green-950 hover:bg-[#00FF0D] text-white rounded w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}

