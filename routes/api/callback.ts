import {Handlers} from "$fresh/src/server/types.ts";
import appEnv from "../../utils/app-env.ts";

export const handler: Handlers = {
    async GET(req, _ctx) {
        // Get Callback unique code
        const url = new URL(req.url);
        const code = url.searchParams.get("code");

        // Get access token
        const result = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                client_id: appEnv.CLIENT_ID,
                client_secret: appEnv.CLIENT_SECRET,
                code: code
            })
        })

        // Set data in cookie
        const data = await result.json();
        const accessToken = data.access_token;

        return new Response("OK", {status:303, headers: {"Set-Cookie": `access_token=${accessToken}; HttpOnly; SameSite=Lax; Path=/`, "Location": "/"}})
    }
}