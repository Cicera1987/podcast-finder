
import Link from "next/link";
import { MenuProps } from "@/types";

export default function MenuItems({ title, icon, href }: MenuProps) {
    return (
        <div className="mb-4">
            <Link href={href}>
                <div
                    className="flex items-center space-x-3 p-3 rounded-md bg-secondary group hover:bg-hover transition-all duration-200 ease-in-out cursor-pointer"
                >
                    <span className="text-2xl group-hover:scale-110 transition-all duration-200 ease-in-out">{icon}</span>
                    <span className="text-white group-hover:scale-105 transition-all duration-200 ease-in-out">{title}</span>
                </div>
            </Link>
        </div>
    );
}
