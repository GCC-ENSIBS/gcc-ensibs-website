import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
    return (
        <>
            <MyHead/>
            <Header active={"/"}/>
            <div class="mx-auto max-w-screen-md items-center flex flex-col justify-center">
                <img src={"/logo.svg"} class={"w-3/4 mt-24 mx-auto shadow-xl rounded-full hover:animate-glitch"}/>
            </div>
        </>
    );
}
