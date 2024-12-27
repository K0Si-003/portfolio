import { useState, useEffect } from 'react'
import { getSavedTracks } from '../services/SpotifyAPI.js'

export default function About() {
    const [fetchingData, setFetchingStatus] = useState(true)
    const [savedTracks, setSavedTracks] = useState({})

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN

    useEffect(() => {
        Promise.all([
            getSavedTracks(client_id, client_secret, refresh_token),
        ]).then((data) => {
            setSavedTracks(data[0])
            setFetchingStatus(false)
        })
    }, [])

    console.log(savedTracks.items)

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
                    {fetchingData ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                            {savedTracks.items.map((track) => (
                                <li key={track.track.id}>
                                    <p>
                                        {track.track.artists[0].name} -{' '}
                                        {track.track.name}
                                    </p>
                                    <p>{track.track.album.release_date.slice(0,4)}</p>
                                    <img src={track.track.album.images[1].url} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="background"></div>
        </main>
    )
}
