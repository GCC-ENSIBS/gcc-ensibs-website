import { SSQL, SSQLTable } from "https://deno.land/x/smallorm_sqlite@0.2.1/lib/SmallSQLite.ts"

export class CTF extends SSQLTable {
    ctf_name = "";
    location = "";
    link_ctftime = "";
    link_linkedin = "";
    link_twitter = "";
    nb_players = 0;
    date = new Date();
}

export class Team extends SSQLTable {
    name = "";
    rank = -1;
    ctf_id = -1;
}


export class Projects extends SSQLTable {
    name = "";
    description = "";
    link = "";
    date = new Date();
}

const db = new SSQL("./utils/database/database.db", [CTF, Team, Projects]);

console.log("[INFO] Database initialized");
// export User and db;
export default db;