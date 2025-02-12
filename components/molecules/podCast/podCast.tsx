"use client"

import { useEffect, useState } from "react";
import { Podcast } from "../../../types";
import { searchPodcasts } from "../../../server/api";
import { Icons } from "@/components/atomic";
import { useFavorites } from "@/context/favoritesContext";

const categories = [
    { id: "Café", name: "Café" },
    { id: "Religião", name: "Religião" },
    { id: "Futebol", name: "Futebol" },
    { id: "Jornalismo", name: "Jornalismo" },
    { id: "Tecnologia", name: "Tecnologia" },
    { id: "Comédia", name: "Comédia" },
    { id: "História", name: "História" },
    { id: "Arte", name: "Arte" },
];

export default function Podcasts() {
    const [podcasts, setPodcasts] = useState < Podcast[] > ([]);
    const [selectedCategory, setSelectedCategory] = useState < string > ("Café");
    const { favorites, addFavorite } = useFavorites();

    
    useEffect(() => {
        async function fetchPodcasts() {
            const podcastsData = await searchPodcasts(selectedCategory);

            const formattedPodcasts = podcastsData.map((podcast: Podcast) => ({
                id: podcast.id,
                name: podcast.name,
                images: podcast.images,
                url: podcast.external_urls.spotify,
            }));

            setPodcasts(formattedPodcasts);
        }

        fetchPodcasts();
    }, [selectedCategory]);

    const isFavorite = (id: string) => favorites.some((podcast: Podcast) => podcast.id === id);

    const addFavoritePodcast = (podcast: Podcast) => {
        if (!isFavorite(podcast.id)) {
            addFavorite(podcast);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Podcasts</h1>
            <div className="mb-4">
                <label htmlFor="category" className="text-lg font-medium">Escolha um tema:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md ml-2"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {podcasts.length > 0 ? (
                    podcasts.map((podcast) => (
                        <div key={podcast.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                            <img
                                src={podcast.images[0].url}
                                alt={podcast.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 truncate">{podcast.name}</h3>
                                <a
                                    href={podcast.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Escutar no Spotify
                                </a>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <button
                                    onClick={() => addFavoritePodcast(podcast)}
                                    className="flex items-center space-x-2"
                                >
                                    <Icons.Favorite
                                        className={`text-xl ${isFavorite(podcast.id) ? "text-yellow-500" : "text-gray-200"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <li>Carregando podcasts...</li>
                )}
            </div>
        </div>
    );
}