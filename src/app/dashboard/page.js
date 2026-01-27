"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login"); // ❌ not logged in
      } else {
        setUser(user); // ✅ logged in → save user
      }
    };

    checkUser();
  }, [router]);

  return (
    <>
      <h1 className="flex flex-col items-center justify-center gap-3 py-20 md:py-40 font-serif text-2xl md:font-bold md:text-3xl bg-gray-600 text-white">

        <span className="w-20 h-20 border-5 border-gray-100 bg-gray-300 rounded-full"></span>
        <span>Welcome to Dashboard</span>
        <span className="text-[#00FF0D] border border-white p-1 mt-2">
          {user
            ? user.email
              .split("@")[0]        // email ka naam part
              .replace(/[0-9]/g, "") // numbers remove
              .charAt(0).toUpperCase() +
            user.email
              .split("@")[0]
              .slice(1)
            : "Guest"}
        </span>

        <span className="text-sm font-medium">
          Profile: {user ? `Currently signed in as ${user.email}` : "Guest user"}
        </span>
      </h1>

    </>
  );
}
