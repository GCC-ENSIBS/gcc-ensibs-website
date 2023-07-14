import { Team } from "../utils/database/db.ts";

export default function RankTeamFame(data: any) {
  let team = data.team;

  // replace rank with a trophy
  switch (team.rank) {
    case 1:
        team.rank = "🥇 1st";
        break;
    case 2:
        team.rank = "🥈 2nd";
        break;
    case 3:
        team.rank = "🥉 3rd";
        break;
    default:
        team.rank = team.rank + "th";
        break;
    }

  return (
    <div className={"flex gap-2"}>
      <p>
        {team.rank}
      </p>
      <p className={"font-bold"}>
        {team.name}
      </p>
    </div>
  );
}
