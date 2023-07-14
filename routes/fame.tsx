import Header from "../components/Header.tsx";
import MyHead from "../components/MyHead.tsx";
import { Handlers } from "$fresh/src/server/types.ts";
import db from "../utils/database/db.ts";
import { Fame } from "../utils/database/db.ts";

export default function HallOfFame(props: any) {
  console.log(props.data);
  return (
    <>
      <MyHead />
      <Header active={"/fame"} />
      <div className="max-w-screen-lg mx-auto p-4 my-8">
        <h1 className="text-4xl font-bold">Hall of Fame</h1>
        <p className="text-xl">Our hall of fame. Thanks to our members.</p>
      </div>
      {/* Hall of Fame */}
      <div className={" max-w-screen-lg mx-auto p-4 my-8 flex flex-wrap"}>
        {props.data.map((fame: any) => {
          return (
            <div
              className={"w-full p-4 block bg-gray-800 rounded-md p-4 hover:scale-105 transform transition duration-500"}
            >
              {/* CTF Title */}
              <div className={"flex items-end gap-2"}>
                <h2 className={"text-2xl text-left font-bold"}>
                  {fame.ctf_name}
                </h2>
                <p className={"text-gray-400 font-italic"}>
                  {fame.location}
                </p>
                <p className={"text-gray-40"}>
                  {fame.nb_players} players
                </p>
                <p className={"text-gray-400 font-italic"}>
                  {fame.date}
                </p>
              </div>
              {/* Teams */}
              <p className={"text-center font-italic text-gray-400"}>
                {fame.team}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const fame = [];
    for (const team of db.findMany(Fame, {})) {
      fame.push(team);
    }

    return ctx.render(fame);
  },
};
