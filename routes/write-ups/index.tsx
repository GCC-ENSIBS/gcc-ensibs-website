import Header from "../../components/Header.tsx";
import {Head} from "$fresh/src/runtime/head.ts";

export default function WriteUps() {
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
        </>
    )
}