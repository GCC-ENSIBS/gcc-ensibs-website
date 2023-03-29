import Header from "../../components/Header.tsx";
import {Head} from "$fresh/src/runtime/head.ts";
import {Handlers} from "$fresh/src/server/types.ts";
import {AllText} from "../../utils/text.ts";
import {Marked} from "../../markdown/src/marked.ts";

export default function WriteUps(props: any) {
    return (
        <>
            <Head>
                <link rel={"stylesheet"} href={"/main.css"}/>
                <title>Write-ups</title>
            </Head>
            <Header active={"/write-ups"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">{AllText.en.writeups}</h1>
                <p className="text-xl">{AllText.en.writeupsSubtitle}</p>
            </div>
            <div className={" max-w-screen-lg mx-auto p-4 my-8 flex flex-wrap"}>
                {props.data.map((writeup: Writeups) => {
                        return (
                            <div className={"w-1/2 md:w-1/3 p-4"}>
                                <a href={`/write-ups/${writeup.filename.replace(".md", "")}`}
                                   className={"block bg-gray-800 rounded-md p-4 hover:scale-110 transform transition duration-500 flex flex-col gap-2"}>
                                    <h2 className={"text-xl text-center font-bold"}>{writeup.title}</h2>
                                    <p className={"text-center"}>{writeup.author}</p>
                                    <div className={"text-center"}> {/* added class */}
                                        {
                                            writeup.tags.map((tag: string) => {
                                                return (
                                                    <span
                                                        className={"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2"}>{tag}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p class={"text-center font-italic"}>{writeup.publish_date}</p>
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
        let writeups: Writeups[] = [];
        const decoder = new TextDecoder("utf-8");
        for await (const dirEntry of Deno.readDir('./write-ups')) {
            if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
                const markdown = Marked.parse(decoder.decode(await Deno.readFile(`./write-ups/${dirEntry.name}`)));
                writeups.push({filename: dirEntry.name, title: markdown.meta.title, description: markdown.meta.description, publish_date: markdown.meta.publish_date, author: markdown.meta.author, tags: markdown.meta.tags})
            }
        }

        return ctx.render(writeups)
    }
}

interface Writeups {
    filename: string
    title: string
    description: string
    publish_date: string
    author: string
    tags: string[]
}