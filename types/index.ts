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
    href: string;
    html_description: string;
    images:{
        url:string;
    };
    languages: string[];
    media_type: string;
    publisher: string;
    total_episodes: number;
    type: string;
    uri: string;
    available_markets: string[];
    copyrights: string[];
    explicit: boolean;
    is_externally_hosted: boolean;
}

export interface FavoritesContextType {
    favorites: Podcast[];
    addFavorite: (podcast: Podcast) => void;
    removeFavorite: (id: string) => void;
}

