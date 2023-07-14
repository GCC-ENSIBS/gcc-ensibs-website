import {Handlers} from "$fresh/src/server/types.ts";
import {CTF, Team} from "../../../../utils/database/db.ts";
import db from "../../../../utils/database/db.ts"

export const handler: Handlers = {
    async POST(req, _ctx) {
        const body = await req.json();

        // Get the CTF id
        const ctf = await db.findMany(CTF, {where: {clause: "ctf_name = ?", values: [body.ctf_name]}});

        const team = new Team();
        team.name = body.name;
        team.rank = body.rank;
        team.ctf_id = ctf[0].id;

        console.log("[INFO] Saving team : " + team.name + " for CTF : " + ctf[0].ctf_name + " with rank : " + team.rank);

        db.save(team);
        return new Response("OK", {status: 200})
    }
}