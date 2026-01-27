import { db } from "@/lib/db";



export async function POST(request){
    try{
    let body = await request.json();
    const {username,password} = body;
        console.log("Received in API:", username, password); //checkpoint 1

    const sql = `INSERT INTO login (username,password) VALUES(?,?)`;
    const values = [username,password];
     console.log("Running query:", sql, values);  //checkpoint 2
    const [result] = await db.query(sql,values);

        console.log("Query result:", result); // ✅ Checkpoint 3

    return new Response("data is recieved successfully in API",{ status: 200 });
    }
    catch(error){
        console.error("Error in POST /login:", error);
        return new Response("data is not recieved successfully in API",{ status: 500 });
    }
}