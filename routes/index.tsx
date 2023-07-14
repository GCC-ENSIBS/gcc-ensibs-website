import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";
import {AllText} from "../utils/text.ts";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-twitter.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/external-link.tsx";

export default function Home() {
    return (
        <>
            <MyHead/>
            <Header active={"/"}/>
            <div class="mx-auto max-w-screen-lg items-center flex flex-col justify-center gap-4 mb-14">
                {/* Logo & Title */}
                <img src={"/logo.svg"} class={"w-1/5 -mt-12 mx-auto shadow-2xl rounded-full hover:animate-glitch bg-white p-1"} alt={"Logo GCC"}/>
                <h1 class="text-4xl font-bold text-center my-4">{AllText.en.welcome}</h1>
                <p class="text-xl text-center">{AllText.en.description}</p>

                {/* Réseaux Sociaux */}
<<<<<<< HEAD
                <p className="text-4xl font-bold text-center my-4">Our Social Media</p>
=======
                <p className="text-4xl font-bold text-center my-4">{AllText.en.socials}</p>
>>>>>>> 34c49d5e33c0148cf6eac5682b58d30f3979301c
                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    <a className="text-md text-center font-italic" href="https://twitter.com/gcc_ensibs">
                        <IconBrandTwitter size={75}/>
                    </a>
                    <a className="text-md text-center font-italic" href="https://www.linkedin.com/company/gcc-ensibs/">
                        <IconBrandLinkedin size={75}/>
                    </a>
                    <a className={"text-md text-center font-italic"} href={"https://github.com/GCC-ENSIBS"}>
                        <IconBrandGithub size={75}/>
                    </a>
                </div>

                {/* Button CTFd */}
                <a type="button" className="px-3 py-2 bg-[#f99712] text-white text-2xl font-bold rounded hover:text-white hover:bg-[#FCD704] flex gap-2"
                   href={"https://ctfd.gcc-ensibs.fr"}>
                    CTFd GCC<IconExternalLink class="w-8 h-8"/>
                </a>
            </div>
        </>
    );
}
