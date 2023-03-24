import {Handlers} from "$fresh/src/server/types.ts";
import appEnv from "../../utils/app-env.ts";

export const handler: Handlers = {
    async GET(req, _ctx) {
        // Get Callback unique code
        return Response.redirect("https://github.com/login/oauth/authorize?client_id=" + appEnv.CLIENT_ID, 302);
    }
}