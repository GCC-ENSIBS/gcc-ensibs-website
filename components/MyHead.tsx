import {Head} from "$fresh/src/runtime/head.ts";

export default function MyHead() {
    return (
        <Head>
            <title>GCC</title>
            <meta name="description" content="Club CTF de l'ENSIBS"></meta>
            <meta property="og:title" content="GCC - ENSIBS"></meta>
            <meta property="og:description" content="Club CTF de l'ENSIBS"></meta>
            <meta property="og:image" content="/back.png"></meta>
            <meta property="og:url" content="/"></meta>
            <meta name="twitter:card" content="summary_large_image"/>
            <link rel="stylesheet" href="/main.css"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
}