"use client";

import { useFavorites } from "@/context/favoritesContext"; 
import { Icons } from "@/components/atomic";
import { Podcast } from "@/types";


export default function Favorites() {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Meus Favoritos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.length > 0 ? (
                    favorites.map((podcast: Podcast) => (
                        <div key={podcast.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={podcast.image}
                                alt={podcast.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 truncate">{podcast.name}</h2>
                                <a
                                    href={podcast.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Escutar no Spotify
                                </a>
                                <div className="mt-4">
                                    <button
                                        onClick={() => removeFavorite(podcast.id)}
                                        className="flex items-center space-x-2 icon-favorite"
                                    >
                                        <Icons.Remove />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Você ainda não tem favoritos.</div>
                )}
            </div>
        </div>
    );
}
