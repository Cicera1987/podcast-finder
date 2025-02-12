"use client";

import { useTranslation } from "react-i18next";
import { MenuProps } from "@/types";
import { Icons } from "@/components/atomic";
import MenuItems from "@/components/molecules/menu/MenuItems";

export default function Sidebar(){
    const { t } = useTranslation();
    const routesMenu: MenuProps[] = [
        { title: t("podCast"), icon: <Icons.PlayCicle />, href: "/" },
        { title: t("favorites"), icon: <Icons.Favorite className="text-gray-200"/>, href: "/favorites" },
        { title: t("about"), icon: <Icons.SmartDisplay />, href: "/about" },
    ];

    return(
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