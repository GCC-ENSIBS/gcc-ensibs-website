import {Handlers} from "$fresh/src/server/types.ts";

export const handler: Handlers = {
    async GET(req, _ctx) {
        return new Response("Hello, world!", {
            status: 200,
        });
    }
}

