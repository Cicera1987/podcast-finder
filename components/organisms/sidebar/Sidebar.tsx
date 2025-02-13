"use client";

import { Icons } from "@/components/atomic";
import MenuItems from "@/components/molecules/menu/MenuItems";

export default function Sidebar() {

    const routesMenu: MenuProps[] = [
        { title: "Podecast", icon: <Icons.PlayCicle />, href: "/" },
        { title: "Favoritos", icon: <Icons.Favorite className="text-gray-200" />, href: "/favorites" },
        { title: "Sobre", icon: <Icons.SmartDisplay />, href: "/about" },
    ];

    return (
        <nav
            className="w-64 p-4 transition-colors duration-300 bg-primary "
        >
            <ul>
                {routesMenu.map((item) => (
                    <MenuItems
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        href={item.href}
                    />
                ))}
            </ul>
        </nav>
    );
}