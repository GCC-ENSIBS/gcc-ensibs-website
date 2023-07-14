import { useSignal } from "@preact/signals";

export default function FameAdd() {
  const ctf_name = useSignal("");
  const location = useSignal("");
  const link_ctftime = useSignal("");
  const link_linkedin = useSignal("");
  const link_twitter = useSignal("");
  const nb_players = useSignal("");
  const date = useSignal("");
  const res = useSignal("");

  function handleClick(event: any) {
    event.preventDefault();
    fetch("/admin/api/fame/ctf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ctf_name: ctf_name.value,
        location: location.value,
        link_ctftime: link_ctftime.value,
        link_linkedin: link_linkedin.value,
        link_twitter: link_twitter.value,
        nb_players: nb_players.value,
        date: date.value,
      }),
    }).then((response) => {
      if (response.status === 200) {
        res.value = "Success";
        console.log("Success");
      } else {
        res.value = "Error";
        console.log("Error");
      }
    });
  }

  function handleChange(event: any, signal: any) {
    event.preventDefault();
    signal.value = event.target.value;
  }

  return (
    <div className={"flex flex-col w-1/4 gap-4"}>
      <h2 className={"text-center text-2xl"}>Add a CTF</h2>
      <input
        type={"text"}
        name={"name"}
        placeholder={"CTF Name"}
        value={ctf_name.value}
        onChange={(event) => handleChange(event, ctf_name)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <select
        name={"location"}
        placeholder={"Location"}
        value={location.value}
        onChange={(event) => handleChange(event, location)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      >
        <option value="Online">Online</option>
        <option value="On-site">On-site</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <input
        type={"text"}
        name={"link_ctftime"}
        placeholder={"CTFTime Link"}
        value={link_ctftime.value}
        onChange={(event) => handleChange(event, link_ctftime)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <input
        type={"text"}
        name={"link_linkedin"}
        placeholder={"LinkedIn Link"}
        value={link_linkedin.value}
        onChange={(event) => handleChange(event, link_linkedin)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <input
        type={"text"}
        name={"link_twitter"}
        placeholder={"Twitter Link"}
        value={link_twitter.value}
        onChange={(event) => handleChange(event, link_twitter)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <input
        type={"text"}
        name={"nb_players"}
        placeholder={"Number of players"}
        value={nb_players.value}
        onChange={(event) => handleChange(event, nb_players)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <input
        type={"text"}
        name={"date"}
        placeholder={"Date"}
        value={date.value}
        onChange={(event) => handleChange(event, date)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <button
        onClick={handleClick}
        className={"px-3 py-2 mx-auto bg-white w-24 rounded-lg border(gray-500 2) hover:bg-gray-200 active:bg-gray-300"}
      >
        Add
      </button>
      <p
        className={"text-center " +
          (res.value === "Success" ? "text-green-400" : "text-red-400")}
      >
        {res.value}
      </p>
    </div>
  );
}
