import { db } from "@/lib/db";

export async function POST(request) {
     try {
          const body = await request.json();
          console.log(" Data recieved by API server :", body);
          const { username, password } = body;
          const [rows] = await db.query(
               "SELECT * FROM login WHERE username = ? AND password = ?",
               [username, password]
          );
          if (rows.length > 0) {
               console.log("Login successful");
               return new Response(JSON.stringify({ success: true }), { status: 200 });
          }
          else {
               console.log("Login failed");
               return new Response(JSON.stringify({ success: false }), { status: 401 });
          }
     }
     catch (error) {
          console.log("Error in API server :", error);
          return new Response(JSON.stringify({ success: false, message: "server error" }), { status: 500 });
     }
}