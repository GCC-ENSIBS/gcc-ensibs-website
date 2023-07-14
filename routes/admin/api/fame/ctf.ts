import {Handlers} from "$fresh/src/server/types.ts";
import {CTF} from "../../../../utils/database/db.ts";
import db from "../../../../utils/database/db.ts"

export const handler: Handlers = {
    async GET(req, _ctx) {
        const ctf = await db.findMany(CTF, {});
        const ctf_name = ctf.map((ctf) => ctf.ctf_name);
        return new Response(JSON.stringify(ctf_name), {status: 200})
    },

    async POST(req, _ctx) {
        const body = await req.json();

        const ctf = new CTF();
        ctf.ctf_name = body.ctf_name;
        ctf.location = body.location;
        ctf.link_ctftime = body.link_ctftime;
        ctf.link_linkedin = body.link_linkedin;
        ctf.link_twitter = body.link_twitter;
        ctf.nb_players = body.nb_players;
        ctf.date = body.date;

        console.log("[INFO] Saving CTF : " + ctf.ctf_name);

        db.save(ctf);
        return new Response("OK", {status: 200})
    }
}