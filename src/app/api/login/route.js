import { LoginRepo } from "@/repo/login/LoginRepo";

export async function POST(request) {
    try {
        let body = await request.json();
        await LoginRepo(body);

        return new Response("Data successfully in API", { status: 200 });
    }
    catch (error) {
        console.error("Error in POST /login:", error);
        return new Response("Error in API POST", { status: 500 });
    }
}