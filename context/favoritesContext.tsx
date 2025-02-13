"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Podcast } from "../types";
interface FavoritesContextType {
    favorites: Podcast[];
    addFavorite: (podcast: Podcast) => void;
    removeFavorite: (id: string) => void;
}
interface ProviderProps{
    children: ReactNode;
}

const FavoritesContext = createContext({} as FavoritesContextType);

export const FavoritesProvider = ({children}: ProviderProps) =>{
    const [favorites, setFavorites]=useState<Podcast[]>([])

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            localStorage.removeItem("favorites");
        }
    }, [favorites]);

    const addFavorite = (podcast: Podcast) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((fav) => fav.id === podcast.id)) {
                return prevFavorites;
            }
            const updatedFavorites = [...prevFavorites, podcast];
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((podcast) => podcast.id !== id);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites deve ser usado dentro de um FavoritesProvide");
    }
    return context;
};
