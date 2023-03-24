import Header from "../../components/Header.tsx";
import {Head} from "$fresh/src/runtime/head.ts";
import {Handlers, PageProps} from "$fresh/src/server/types.ts";

export default function WriteUps(props: PageProps) {
    return (
        <>
            <Head>
                <link rel={"stylesheet"} href={"/main.css"}/>
                <title>Write-ups</title>
            </Head>
            <Header active={"/write-ups"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">Write-ups</h1>
                <p className="text-xl">Here are some write-ups of CTFs we have participated in.</p>
            </div>
            <div className={" max-w-screen-lg mx-auto p-4 my-8 flex flex-wrap"}>
                {props.data.map((writeup: string) => {
                        return (
                            <div className={"w-1/2 md:w-1/3 p-4"}>
                                <a href={`/write-ups/${writeup.replace(" ", "_")}`}
                                   className={"block bg-gray-800 rounded-md p-4 hover:scale-110 transform transition duration-500"}>
                                    <h2 className={"text-xl text-center font-bold"}>{writeup}</h2>
                                </a>
                            </div>
                        )
                    }
                )}
            </div>


        </>
    )
}

export const handler: Handlers = {
    async GET(req, ctx) {
        // Fetch write ups file name in write-ups folder
        const writeups = [];
        for await (const dirEntry of Deno.readDir('./write-ups')) {
            if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
                writeups.push(dirEntry.name.replace(".md", "").replace("_", " "));
            }
        }

        return ctx.render(writeups)
    }
}