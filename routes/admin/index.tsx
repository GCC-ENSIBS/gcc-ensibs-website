import Header from "../../components/Header.tsx";
import MyHead from "../../components/MyHead.tsx";
import AddCTFFame from "../../islands/AddCTFFame.tsx";
import AddTeamFame from "../../islands/AddTeamFame.tsx";
import {Handlers} from "$fresh/src/server/types.ts";

interface Props {
    data: string
}

export default function Admin(props: Props) {
    return (
        <>
            <MyHead/>
            <Header active={"/admin"}/>
            <h2 class={"text-4xl font-bold text-center mt-4"}>Bonjour, {props.data}</h2>
            <div className={"flex justify-center gap-6 max-w-screen-full mt-4 mx-6"}>
                {/* Hall of fame manager */}
                <AddCTFFame/>
                <AddTeamFame/>
            </div>
        </>
    )
}

export const handler : Handlers = {
    async GET(req,ctx) {
        return ctx.render(ctx.state.name)
    }
}
