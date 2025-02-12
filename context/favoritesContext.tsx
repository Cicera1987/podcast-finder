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
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

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
        throw new Error("useFavorites deve ser usado dentro de um FavoritesProvide");
    }
    return context;
};
