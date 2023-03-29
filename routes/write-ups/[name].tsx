import {Handlers, PageProps} from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import {CSS} from "https://deno.land/x/gfm/mod.ts";
import {Head} from "$fresh/src/runtime/head.ts";
import {Marked} from "../../markdown/mod.ts";

export default function WriteUpsReading(props: PageProps) {
    const body = props.data;
    return (
        <>
            <Head>
                <link rel={"stylesheet"} href={"/main.css"}/>
                <style>{CSS}</style>
                <title>Write-ups</title>
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
    async GET(req, ctx) {
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

        return ctx.render(markup.content);
    }
};