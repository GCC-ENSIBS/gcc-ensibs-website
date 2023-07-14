import {Handlers} from "$fresh/src/server/types.ts";
import {Fame} from "../../../utils/database/db.ts";
import db from "../../../utils/database/db.ts"

export const handler: Handlers = {
    async POST(req, _ctx) {
        const body = await req.json();

        const fame = new Fame();
        fame.ctf_name = body.ctf_name;
        fame.team = body.team;
        fame.rank = body.rank;
        fame.location = body.location;
        fame.link_ctftime = body.link_ctftime;
        fame.link_linkedin = body.link_linkedin;
        fame.link_twitter = body.link_twitter;
        fame.nb_players = body.nb_players;
        fame.date = body.date;

        db.save(fame);
        return new Response("OK", {status: 200})
    }
}