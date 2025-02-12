"use client"
// Função para obter o token
const getSpotifyToken = async () => {

    if (typeof window === "undefined") return null; // Evita erro no SSR

    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

    if (!CLIENT_ID || !CLIENT_SECRET) {
        console.error("As variáveis de ambiente não estão definidas.");
        return null;
    }

    const cachedToken = localStorage.getItem('spotify_access_token');
    const tokenExpiration = localStorage.getItem('spotify_token_expiration');

    if (cachedToken && tokenExpiration && new Date().getTime() < parseInt(tokenExpiration)) {
        return cachedToken;
    }

    const authHeader = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${authHeader}`,
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
    });

    const data = await response.json();

    if (response.ok) {
        const expiresIn = data.expires_in || 3600;
        const expirationTime = new Date().getTime() + expiresIn * 1000;

        localStorage.setItem('spotify_access_token', data.access_token);
        localStorage.setItem('spotify_token_expiration', expirationTime.toString());

        return data.access_token;
    } else {
        console.error('Erro ao obter token:', data.error_description);
        throw new Error('Erro ao obter token do Spotify');
    }
};

// Função para obter todos os podcasts
export const searchPodcasts = async (query: string) => {
    try {
        const token = await getSpotifyToken();
        if (!token) {
            throw new Error('Token do Spotify não disponível');
        }
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=show`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (response.ok && data.shows && data.shows.items) {
            return data.shows.items;
        } else {
            throw new Error('Erro ao buscar podcasts');
        }
    } catch (error) {
        console.error('Erro ao acessar podcasts do Spotify:', error);
    }
};