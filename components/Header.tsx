import Menu from "../islands/Menu.tsx";
import BlinkingCursor from "../islands/BlinkingCursor.tsx";

type Props = {
    active: string;
};

export default function Header({ active }: Props) {
    return (
        <div class="w-full py-2 px-8 flex flex-col md:flex-row gap-4 bg-[#DB2955]">
            <a class="flex items-center md:flex-1" href={"/"}>
                {/*<img src={"/logo_white.svg"} class={"w-14 h-14 mr-4"}/>*/}
                <h2 class="text-4xl ml-1 font-bold">
                    Galette Cidre CTF
                </h2>
                <BlinkingCursor/>
            </a>
            <Menu/>
        </div>
    );
}