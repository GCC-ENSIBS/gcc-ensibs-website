import Header from "../../components/Header.tsx";
<<<<<<< HEAD
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/src/server/types.ts";
import { Marked } from "../../utils/markdown/mod.ts";

export default function WriteUps(props: PageProps) {
  return (
    <>
      <Head>
        <link rel={"stylesheet"} href={"/main.css"} />
        <title>Write-ups</title>
      </Head>
      <Header active={"/write-ups"} />
      <div className="max-w-screen-lg mx-auto p-4 my-8">
        <h1 className="text-4xl font-bold">Write-ups</h1>
        <p className="text-xl">
          Here are some write-ups of CTFs we have participated in.
        </p>
      </div>
      <div className={" max-w-screen-lg mx-auto p-4 my-8 flex flex-wrap"}>
        {props.data.map((writeup: any) => {
          return (
            <div className={"w-1/2 md:w-1/3 p-4"}>
              <a
                href={`/write-ups/${writeup.file}`}
                className={"block bg-gray-800 rounded-md p-4 hover:scale-110 transform transition duration-500"}
              >
                <h2 className={"text-xl text-center font-bold"}>
                  {writeup.meta.title}
                </h2>
                <p className={"text-center font-italic text-gray-400"}>
                  {writeup.meta.author}
                </p>
                <p className={"text-center font-bold text-gray-400"}>
                  {writeup.meta.context}
                </p>
                {writeup.meta.tags && writeup.meta.tags.length > 0 && (
                  <div className={"flex flex-wrap justify-center"}>
                    {writeup.meta.tags.map((tag: string) => {
                      return (
                        <span className={"text-gray-300 rounded-md m-1"}>
                          #{tag}
                        </span>
                      );
                    })}
                  </div>
=======
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
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
                )}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const handler: Handlers = {
<<<<<<< HEAD
  async GET(req, ctx) {
    // Fetch write ups file name in write-ups folder
    const writeups = [];
    const decoder = new TextDecoder("utf-8");

    // Get the meta data of each write-up
    for await (const dirEntry of Deno.readDir("./write-ups")) {
      if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        let markup;
        try {
          const markdown = decoder.decode(
            Deno.readFileSync(`./write-ups/${dirEntry.name}`),
          );
          markup = Marked.parse(markdown);
        } catch (e) {
          ctx.renderNotFound();
=======
    async GET(req, ctx) {
        // Fetch write ups file name in write-ups folder
        let writeups: Writeups[] = [];
        const decoder = new TextDecoder("utf-8");
        for await (const dirEntry of Deno.readDir('./write-ups')) {
            if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
                const markdown = Marked.parse(decoder.decode(await Deno.readFile(`./write-ups/${dirEntry.name}`)));
                // cehck if markdown has all required fields
                if (markdown.meta.title && markdown.meta.description && markdown.meta.publish_date && markdown.meta.author && markdown.meta.tags) {
                    writeups.push({filename: dirEntry.name, title: markdown.meta.title, description: markdown.meta.description, publish_date: markdown.meta.publish_date, author: markdown.meta.author, tags: markdown.meta.tags})
                }
            }
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
        }

        if (
          !markup || !markup.meta.title || !markup.meta.author ||
          !markup.meta.context
        ) {
          continue;
        }

        writeups.push({
          file: dirEntry.name.replace(".md", ""),
          meta: markup.meta,
        });
      }
    }
<<<<<<< HEAD

    return ctx.render(writeups);
  },
};
=======
}

interface Writeups {
    filename: string
    title: string
    description: string
    publish_date: string
    author: string
    tags: string[]
}
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
