import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx"


export default function Login() {
    return (
        <>
            <MyHead/>
            <Header active={"/login"}/>
            <div class={"flex flex-col mx-auto gap-6 text-3xl my-12 text-white max-w-screen-lg items-center justify-items"}>
                <h1 class={"text-6xl font-bold"}>Login</h1>
                <div>
                    <p className={"text-xl font-italic text-center"}>Connexion pour le panel Admin.</p>
                    <p className={"text-xl font-italic text-center"}>Si vous n'êtes pas dans l'organisation GitHub GCC - ENSIBS vous ne pourrez pas y accéder :)</p>
                </div>
                <a href={"/api/login"} class={"text-white font-bold flex flex-row items-center justify-items bg-gray-800 p-4 m-4 rounded-xl"}><IconBrandGithub class={"text-white"} size={60}/>Login with GitHub</a>
            </div>
        </>

    )
}