import {Head} from "$fresh/src/runtime/head.ts";

export default function MyHead() {
  return (
    <Head>
      <title>GCC</title>
        <meta name="description" content="Galette Cidre CTF" />
        <link rel="stylesheet" href="/main.css" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}