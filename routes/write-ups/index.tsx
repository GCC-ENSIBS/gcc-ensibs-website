import Header from "../../components/Header.tsx";
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
        }

        if (
          !markup || !markup.meta.title || !markup.meta.author ||
          !markup.meta.context || !markup.meta.tags
        ) {
          continue;
        }

        writeups.push({
          file: dirEntry.name.replace(".md", ""),
          meta: markup.meta,
        });
      }
    }

    return ctx.render(writeups);
  },
};
