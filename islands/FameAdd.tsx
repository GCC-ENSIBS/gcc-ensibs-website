import {useSignal} from "@preact/signals";

export default function FameAdd() {
    const name = useSignal("")
    const rank = useSignal("")
    const team = useSignal("")
    const res = useSignal("")

    function handleClick(event: any) {
        event.preventDefault()
        fetch("/admin/api/fame", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                rank: rank.value,
                team: team.value
            })
        }).then((response) => {
            if (response.status === 200) {
                res.value = "Success"
                console.log("Success")
            } else {
                res.value = "Error"
                console.log("Error")
            }
        })
    }

    function handleChange(event: any, signal: any) {
        event.preventDefault()
        signal.value = event.target.value
    }

    return (
        <div className={"flex flex-col gap-4"}>
            <h2 className={"text-center text-2xl"}>Add a team to the hall of fame</h2>
            <p className={"text-center " + (res.value === "Success" ? "text-green-400" : "text-red-400")}>{res.value}</p>
            <input type={"text"} name={"name"} placeholder={"Name"} value={name.value}
                   onChange={(event) => handleChange(event, name)}
                   className={"px-3 py-2 bg-white rounded border(gray-500 2)"} required/>
            <input type={"text"} name={"rank"} placeholder={"Rank"} value={rank.value}
                   onChange={(event) => handleChange(event, rank)}
                   className={"px-3 py-2 bg-white rounded border(gray-500 2)"} required/>
            <input type={"text"} name={"team"} placeholder={"Team"} value={team.value}
                   onChange={(event) => handleChange(event, team)}
                   className={"px-3 py-2 bg-white rounded border(gray-500 2)"} required/>
            <button onClick={handleClick}
                    className={"px-3 py-2 mx-auto bg-white w-24 rounded-lg border(gray-500 2) hover:bg-gray-200 active:bg-gray-300"}>Add
            </button>
        </div>
    )
}