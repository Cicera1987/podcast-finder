import { ReactNode } from "react";

export interface MenuProps {
    title: string;
    icon: ReactNode;
    href: string;
    onClick?: () => void;
}

export interface Podcast {
    id: string;
    name: string;
    description: string;
    external_urls: {
        spotify: string;
    };
    images:{
        url: string
    }[];
    uri: string;
}



