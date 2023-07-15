import Header from "../components/Header.tsx";
import MyHead from "../components/MyHead.tsx";
import { Handlers } from "$fresh/src/server/types.ts";
import db from "../utils/database/db.ts";
import { CTF, Team } from "../utils/database/db.ts";
import RankTeamFame from "../components/RankTeamFame.tsx";

export default function HallOfFame(props: any) {
  return (
    <>
      <MyHead />
      <Header active={"/fame"} />
      <div className="max-w-screen-lg mx-auto p-4 my-8">
        <h1 className="text-4xl font-bold">Hall of Fame</h1>
        <p className="text-xl">Our hall of fame. Thanks to our members.</p>
      </div>
      {/* Hall of Fame */}
      <div className={"max-w-screen-lg mx-auto p-4 my-8 flex flex-wrap gap-4"}>
        {props.data.map((fame: any) => {
          return (
            <div
              className={"w-full p-4 bg-gray-800 rounded-md p-4 hover:scale-105 transform transition duration-500"}
            >
              {/* CTF Title */}
              <div className={"flex items-end gap-2 mb-4"}>
                <h2 className={"text-2xl text-left font-bold"}>
                  {fame.ctf.ctf_name}
                </h2>
                <p className={"text-gray-400 font-italic"}>
                  {fame.ctf.location}
                </p>
                <p className={"text-gray-40"}>
                  {fame.ctf.nb_players} players
                </p>
                <p className={"text-gray-400 font-italic"}>
                  {fame.ctf.date}
                </p>
              </div>
              {/* Teams */}
              <div>
                {fame.teams.map((team: any) => {
                  return <RankTeamFame team={team} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const handler: Handlers = {
  GET(req, ctx) {
    // Get all the CTFs with all the teams
    const ctfs = db.findMany(CTF, {});
    const teams = db.findMany(Team, {});
    const fame: any[] = [];

    // for each CTF, get the teams who participated with ctf_id
    const data = ctfs.map((ctf: CTF) => {
      const ctf_teams = teams.filter((team: any) => {
        return team.ctf_id === ctf.id;
      });
      fame.push({
        ctf: ctf,
        teams: ctf_teams,
      });

      // sort teams by rank
      fame.sort((a: any, b: any) => {
        return a.teams.rank - b.teams.rank;
      });
    });
    return ctx.render(fame);
  },
};
