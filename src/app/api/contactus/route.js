// import { db } from "@/lib/config/db";
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log(" Data recieved by API server :", body);
//     const { firstName, lastName, email, phoneNumber, subject, message } = body;

//     const sql = `
//       INSERT INTO contact_us 
//         (firstname, lastname, email, phonenumber, subject, message)
//       VALUES (?, ?, ?, ?, ?, ?)
//     `;
//     const values = [firstName, lastName, email, phoneNumber, subject, message];

//     await db.execute(sql,values);  // assumes db.execute is correct and secure
    
//     return new Response("Got data successfully in API", { status: 200 });
//   } catch (error) {
//     console.error("Error in POST /contactus:", error);
//     return new Response("Error in getting data from client", { status: 500 });
//   }
// }


export async function POST(req) {
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