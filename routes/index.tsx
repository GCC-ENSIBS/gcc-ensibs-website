import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";
import {AllText} from "../utils/text.ts";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-twitter.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";

export default function Home() {
    return (
        <>
            <MyHead/>
            <Header active={"/"}/>
            <div class="mx-auto max-w-screen-lg items-center flex flex-col justify-center gap-4 mb-14">
                <img src={"/logo.svg"} class={"w-3/5 mt-16 mx-auto shadow-xl rounded-full hover:animate-glitch"}/>
                <h1 class="text-4xl font-bold text-center my-4">{AllText.fr.welcome}</h1>
                <p class="text-xl text-center">{AllText.fr.description}</p>

                {/* Réseaux Sociaux */}
                <p className="text-4xl font-bold text-center my-4">Nos Réseaux Sociaux</p>
                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    <a className="text-md text-center font-italic" href="https://twitter.com/gcc_ensibs">
                        <IconBrandTwitter size={75}/>
                    </a>
                    <a className="text-md text-center font-italic" href="https://www.linkedin.com/company/gcc-ensibs/">
                        <IconBrandLinkedin size={75}/>
                    </a>
                </div>
            </div>
        </>
    );
}
