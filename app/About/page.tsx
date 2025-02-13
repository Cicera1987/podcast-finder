"use client"

import CreditsList from "@/components/molecules/creditsList/CreditsList";
import InfoSection from "@/components/molecules/infoSection/InfoSection";

export default function About() {
    const credits = () => [
        { name: 'Spotify API', link: 'https://developer.spotify.com' }
    ]

    return (
        <div className="max-w-4xl mx-auto p-4">
            <InfoSection
                title="Sobre o Podcast Finder"
                content="Podcast Finder é uma aplicação web que permite aos usuários descobrir, ouvir e organizar seus podcasts favoritos. Integrada com a API do Spotify, a plataforma oferece uma experiência simples e intuitiva para explorar conteúdos de áudio de diversos gêneros."
            />
            <InfoSection
                title="Como Funciona?"
                content="A aplicação utiliza a API do Spotify para buscar podcasts populares, permitindo que os usuários explorem e adicionem aos seus favoritos."
            />
            <div className="mt-8">
                <h2 className="text-2xl font-bold">Créditos</h2>
                <CreditsList credits={credits()} />
            </div>
        </div>
    )
}