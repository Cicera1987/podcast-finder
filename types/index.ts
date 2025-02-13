export interface Podcast {
    id: string;
    name: string;
    description: string;
    external_urls: {
        spotify: string;
    };
    images: {
        url: string;
    }[];
    url: string;
    image: string;
}
export interface PodcastFavorites {
    id: string;
    name: string;
    description: string;
    external_urls: {
        spotify: string;
    };
    image: string;
    url: string;
}

