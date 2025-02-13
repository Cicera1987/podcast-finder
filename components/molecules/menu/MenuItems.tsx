
import Link,{ LinkProps} from "next/link";
import { ReactNode } from "react";


export interface MenuProps extends LinkProps {
    title: string;
    icon: ReactNode;
    href: string;
    onClick?: () => void;
}

export default function MenuItems({ title, icon, href, ...rest }: MenuProps) {
    return (
        <div className="mb-4">
            <Link href={href} {...rest}>
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
