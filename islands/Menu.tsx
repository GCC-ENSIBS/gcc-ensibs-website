import {useState} from "preact/hooks";
import IconMenu from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu.tsx"

export default function Menu() {
    const menus  = [
        {name: "Home", href: "/"},
        {name: "About", href: "/about"},
        {name: "Hall of Fame", href: "/fame"},
        {name: "Projects", href: "/projects"},
        {name: "Write-ups", href: "/write-ups"}
    ]
    const [dropdownOpen, setdropdownOpen] = useState(false);
    return (
        <>
            <div class="flex items-center"
                 onMouseEnter={() => setdropdownOpen(!dropdownOpen)}
                 onMouseLeave={() => setdropdownOpen(!dropdownOpen)}>
                <div class="relative">

                    <button
                        class="flex items-center gap-2 text-white font-bold py-2 px-4 rounded"
                        onMouseEnter={() => setdropdownOpen(true)}
                    >
                        <IconMenu class={"text-white"} size={35}/>
                    </button>
                    <div
                        class={
                            "absolute right-0 py-2 w-48 bg-white rounded-md shadow-xl z-10" +
                            (dropdownOpen ? " block" : " hidden")
                        }
                    >
                        {
                            menus.map((menu) => (
                                <a
                                    href={menu.href}
                                    class="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white"
                                >
                                    {menu.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    );
}