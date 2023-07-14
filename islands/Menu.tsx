import {useState} from "preact/hooks";

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
            <div class="flex items-center">
                <div class="relative">
                    <button
                        onmouseenter={() => setdropdownOpen(!dropdownOpen)}
                        class="flex items-center gap-2 text-white font-bold py-2 px-4 rounded"
                    >
                        <svg viewBox="0 0 100 80" width="40" height="40" fill={"white"}>
                            <rect width="100" height="20" rx="10"></rect>
                            <rect y="30" width="100" height="20" rx="10"></rect>
                            <rect y="60" width="100" height="20" rx="10"></rect>
                        </svg>
                    </button>
                    <div
                        onmouseleave={() => setdropdownOpen(!dropdownOpen)}
                        class={
                            "absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10" +
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