import {Handlers} from "$fresh/src/server/types.ts";
import appEnv from "../../utils/app-env.ts";

export const handler: Handlers = {
    GET(_req, _ctx) {
        // Get Callback unique code
        console.log("[INFO] Redirecting to Github Login" );
        return Response.redirect("https://github.com/login/oauth/authorize?client_id=" + appEnv.CLIENT_ID, 302);
    }
}