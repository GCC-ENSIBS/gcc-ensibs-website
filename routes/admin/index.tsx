import Header from "../../components/Header.tsx";
import MyHead from "../../components/MyHead.tsx";
import FameAdd from "../../islands/FameAdd.tsx";
import {Handlers} from "$fresh/src/server/types.ts";

interface Props {
    data: string
}

export default function Admin(props: Props) {
    return (
        <>
            <MyHead/>
            <Header active={"/admin"}/>
            <div className={"flex flex-col mx-auto gap-6 max-w-screen-md items-center justify-items mt-4"}>
                <h2 class={"text-4xl font-bold text-center"}>Bonjour, {props.data}</h2>
                {/* Hall of fame */}
                <FameAdd/>
            </div>
        </>
    )
}

export const handler : Handlers = {
    async GET(req,ctx) {
        return ctx.render(ctx.state.name)
    }
}
