import Header from "../../components/Header.tsx";
import MyHead from "../../components/MyHead.tsx";
<<<<<<< HEAD
import AddCTFFame from "../../islands/AddCTFFame.tsx";
import AddTeamFame from "../../islands/AddTeamFame.tsx";
=======
import FameAdd from "../../islands/FameAdd.tsx";
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
import {Handlers} from "$fresh/src/server/types.ts";

interface Props {
    data: string
}

export default function Admin(props: Props) {
    return (
        <>
            <MyHead/>
            <Header active={"/admin"}/>
<<<<<<< HEAD
            <h2 class={"text-4xl font-bold text-center mt-4"}>Bonjour, {props.data}</h2>
            <div className={"flex justify-center gap-6 max-w-screen-full mt-4 mx-6"}>
                {/* Hall of fame manager */}
                <AddCTFFame/>
                <AddTeamFame/>
=======
            <div className={"flex flex-col mx-auto gap-6 my-6 max-w-screen-md items-center justify-items"}>
                <h2 class={"text-4xl font-bold text-center"}>Bonjour, {props.data}</h2>
                {/* Hall of fame */}
                <FameAdd/>
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
            </div>
        </>
    )
}

export const handler : Handlers = {
    async GET(req,ctx) {
        return ctx.render(ctx.state.name)
    }
}
