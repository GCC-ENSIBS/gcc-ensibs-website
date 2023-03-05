type Props = {
    active: string;
};

export default function Header({ active }: Props) {
    const menus = [
        {name: "Home", href: "/"},
        {name: "Bureau", href: "/bureau"},
        {name: "Contact", href: "/contact"},
        {name: "Stream", href: "/stream"}
    ];

    return (
        <div class="w-full py-6 px-8 flex flex-col md:flex-row gap-4">
            <div class="flex items-center md:flex-1">
                <img src={"/logo_white.svg"} class={"w-14 h-14 mr-4"}/>
                <h2 class="text-4xl ml-1 font-bold">
                    GCC
                </h2>
            </div>
            <ul class="flex items-center gap-6">
                {menus.map((menu) => (
                    <li>
                        <a
                            href={menu.href}
                            class={"py-1" +
                                (menu.href === active ? " font-bold border-b-2" : "")}
                        >
                            {menu.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}