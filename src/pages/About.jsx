import { useState, useEffect } from 'react'
import querystring from 'querystring'
import { Buffer } from 'buffer'

export default function About() {
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?limit=5`

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN

    const getAccessToken = async (client_id, client_secret, refresh_token) => {
        //Creates a base64 code of client_id:client_secret as required by the API
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
            'base64'
        )

        //The response will contain the access token
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token,
            }),
        })

        return response.json()
    }

    const getNowPlaying = async (client_id, client_secret, refresh_token) => {
        const { access_token } = await getAccessToken(
            client_id,
            client_secret,
            refresh_token
        )
        return fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
    }

    async function getNowPlayingItem(client_id, client_secret, refresh_token) {
        const response = await getNowPlaying(
            client_id,
            client_secret,
            refresh_token
        )
        if (response.status === 204 || response.status > 400) {
            return false
        }
        return response.json()
    }

    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState({})

    useEffect(() => {
        Promise.all([
            getNowPlayingItem(client_id, client_secret, refresh_token),
        ]).then((results) => {
            setResult(results[0])
            setLoading(false)
        })
    }, [])

    console.log(result)

    return (
        <main className="about">
            <div className="container">
                <h1 className="about__title">About</h1>
                <div className="container-md">
                    <p className="about__text">
                        <span>
                            Salut, moi c'est Hugo, développeur front-end basé à
                            Lyon, France. Bienvenue sur mon petit bout
                            d'internet. Ici vous pourrez trouver mon travail,
                            mes derniers projets ou mes dernières
                            expérimentations.
                        </span>
                    </p>
                    <p className="about__text">
                        <span>
                            Mes premiers pas dans le monde du web se font en
                            2016 via la découverte de Flash et ActionScript. Par
                            la suite je découvrirais, le webdesign, et le
                            développement front-end. Html, CSS puis React et
                            ThreeJS.
                        </span>
                    </p>
                    <p className="about__text">
                        <span>
                            Comme prochaine étape d'apprentisage je souhaiterais
                            approfondir les frameworks orienté SSR. 100%
                            Typescript en ligne de mire et toujours des
                            expérimentations dans le domaine de la 3d orienté
                            web.
                        </span>
                    </p>
                </div>
                <h2>Skills</h2>
                <div>
                    <h2>Spotify</h2>
                </div>
            </div>
            <div className="background"></div>
        </main>
    )
}
