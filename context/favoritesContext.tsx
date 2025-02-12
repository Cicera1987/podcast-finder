"use client"

import { createContext, ReactNode, useContext, useState } from "react";
import { FavoritesContextType, Podcast } from "../types";

interface ProviderProps{
    children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider = ({children}: ProviderProps) =>{
    const [favorites, setFavorites]=useState<Podcast[]>([])

    const addFavorite = (podcast: Podcast) => {
        setFavorites((prevFavorites) => [...prevFavorites, podcast]);
    };

    const removeFavorite = (id: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter((podcast) => podcast.id !== id));
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
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};
