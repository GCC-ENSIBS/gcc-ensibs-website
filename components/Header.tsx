import Menu from "../islands/Menu.tsx";

type Props = {
    active: string;
};

export default function Header({ active }: Props) {
    return (
        <div class="w-full py-6 px-8 flex flex-col md:flex-row gap-4">
            <div class="flex items-center md:flex-1">
                <img src={"/logo_white.svg"} class={"w-14 h-14 mr-4"}/>
                <h2 class="text-4xl ml-1 font-bold">
                    GCC
                </h2>
            </div>
            <Menu/>
        </div>
    );
}