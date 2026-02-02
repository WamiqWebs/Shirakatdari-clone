import { supabase }from '@/lib/supabase'
export async function POST(req: Request) {
  console.log("API HIT ✅");
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("contact_us")
      .insert([body]);

    if (error) {
      console.error(error);
      return new Response("Error saving data", { status: 500 });
    }

    return new Response("Success", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}