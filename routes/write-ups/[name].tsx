import {Handlers, PageProps} from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
<<<<<<< HEAD
import {Marked} from  "../../utils/markdown/mod.ts";
=======
import {CSS} from "https://deno.land/x/gfm/mod.ts";
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
import {Head} from "$fresh/src/runtime/head.ts";
import {Marked} from "../../markdown/mod.ts";

export default function WriteUpsReading(props: PageProps) {
    const body = props.data;
    return (
        <>
            <Head>
                <link rel={"stylesheet"} href={"/main.css"}/>
                <title>Write-ups</title>
                <link rel="stylesheet" href="/write-ups.css"/>
            </Head>
            <Header active={"/write-ups"}/>
            <div
                data-color-mode="light"
                data-light-theme="light"
                data-dark-theme="dark"
                className="markdown-body max-w-screen-lg mx-auto p-4 my-8"
                dangerouslySetInnerHTML={{__html: body}}
            >
            </div>
        </>
    );
}

export const handler: Handlers = {
    GET(req, ctx) {
        // open the file
        const name = ctx.params.name;
        const decoder = new TextDecoder("utf-8");
        let markdown;
        try {
            markdown = decoder.decode(await Deno.readFile(`./write-ups/${name}.md`));
        } catch (e) {
            return ctx.renderNotFound();
        }
        // render the markdown
        const markup = Marked.parse(markdown);
<<<<<<< HEAD
=======

>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
        return ctx.render(markup.content);
    }
};