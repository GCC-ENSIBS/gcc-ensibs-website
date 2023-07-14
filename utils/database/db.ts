import { SSQL, SSQLTable } from "https://deno.land/x/smallorm_sqlite@0.2.1/lib/SmallSQLite.ts"

export class Fame extends SSQLTable {
    ctf_name = "";
    team = "";
    rank = -1;
    location = "";
    link_ctftime = "";
    link_linkedin = "";
    link_twitter = "";
    nb_players = 0;
    date = new Date();
}

export class Projects extends SSQLTable {
    name = "";
    description = "";
    link = "";
    date = new Date();
}

const db = new SSQL("./utils/database/database.db", [Fame]);


// export User and db;
export default db;