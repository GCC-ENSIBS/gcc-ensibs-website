import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";

export default function AddTeamFame() {
  const name = useSignal("");
  const rank = useSignal("");
  const ctf_name = useSignal("");
  const res = useSignal("");

  const ctf_list = useSignal([]);

  useEffect(() => {
    fetch("/admin/api/fame/ctf")
      .then((response) => response.json())
      .then((data) => {
        ctf_list.value = data;
      });
  }, []);

  function handleClick(event: any) {
    event.preventDefault();
    fetch("/admin/api/fame/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        rank: rank.value,
        ctf_name: ctf_name.value,
      }),
    }).then((response) => {
      if (response.status === 200) {
        res.value = "Success";
      } else {
        res.value = "Error";
      }
    });
  }

  function handleChange(event: any, signal: any) {
    event.preventDefault();
    signal.value = event.target.value;
  }

  return (
    <div className={"flex flex-col w-1/4 gap-4"}>
      <h2 className={"text-center text-2xl"}>Add a Team</h2>
      <select
        name={"name"}
        placeholder={"CTF Name"}
        value={ctf_name.value}
        onChange={(event) => handleChange(event, ctf_name)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      >
        {
          ctf_list.value.map((ctf: any) => {
            console.log(ctf);
            return (
              <option value={ctf}>{ctf}</option>
            );
          })
        }
      </select>
      <input
        type={"text"}
        name={"name"}
        placeholder={"Team Name"}
        value={name.value}
        onChange={(event) => handleChange(event, name)}
        className={"px-3 py-2 bg-white rounded border(gray-500 2)"}
        required
      />
      <input
        type={"text"}
        name={"rank"}
        placeholder={"Rank"}
        value={rank.value}
        onChange={(event) => handleChange(event, rank)}
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
