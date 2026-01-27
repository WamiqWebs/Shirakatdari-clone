"use client";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data?.session) {
        router.push("/dashboard"); // login successful
      } else {
        router.push("/login");
      }
    };

    handleAuth();
  }, []);

  return <p>Verifying email...</p>;
}
