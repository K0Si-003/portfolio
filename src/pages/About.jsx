import { useState, useEffect } from 'react'
import { getSavedTracks } from '../services/SpotifyAPI.js'

export default function About() {
    const [fetchingData, setFetchingStatus] = useState(true)
    const [savedTracks, setSavedTracks] = useState({})

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN

    useEffect(() => {
        Promise.all([getSavedTracks(client_id, client_secret, refresh_token)]).then((data) => {
            setSavedTracks(data[0])
            setFetchingStatus(false)
        })
    }, [])

    return (
        <main className="about">
            <section className="about__info container-md">
                <h1 className="about__title">About</h1>
                <p className="about__text">
                    <span>
                        Hello, moi c'est Hugo, développeur front-end basé à Lyon, France. Bienvenue
                        sur mon petit bout d'internet. Ici vous pourrez trouver mon travail, mes
                        derniers projets ou mes dernières expérimentations.
                    </span>
                </p>
                <p className="about__text">
                    <span>
                        Mes premiers pas dans le monde du web se font en 2016 via la découverte de
                        Flash et ActionScript. Par la suite je découvrirais, le webdesign, et le
                        développement web. Html, CSS puis React et ThreeJS.
                    </span>
                </p>
                <p className="about__text">
                    <span>
                        Comme prochaine étape d'apprentisage je souhaiterais approfondir les
                        frameworks orienté SSR. 100% Typescript en ligne de mire et toujours des
                        expérimentations dans le domaine de la 3d orienté web.
                    </span>
                </p>
            </section>
            <section className="about__skills container">
                <h2>Skills</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ex corporis!
                    Eligendi ullam suscipit corporis, corrupti aspernatur impedit nostrum delectus
                    quod, voluptate facilis quae obcaecati laudantium enim fuga. Illo quidem quas
                    officia architecto, expedita inventore natus alias perferendis consequuntur
                    corrupti. Excepturi minus optio vitae est iste rerum doloremque facere! Eligendi
                    sapiente deserunt rerum doloribus odit asperiores error repellendus voluptatem a
                    nihil, porro exercitationem dolor recusandae at ut eos hic laborum quo vel harum
                    ex quod vero. Nulla laudantium excepturi fugit aut. Vero harum quam possimus
                    dignissimos. Tenetur praesentium asperiores aperiam animi cumque. Consequatur,
                    animi mollitia. Quidem soluta consequuntur mollitia odio.
                </p>
            </section>
            <section className="about__spotify container">
                <h2 className='about__title'>Spotify</h2>
                {fetchingData ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="spotify__grid">
                        {savedTracks.items.map((track) => (
                            <li key={track.track.id} className="grid__item">
                                <p className="item__text">
                                    <span>{track.track.artists[0].name}</span>
                                    <span>{track.track.name}</span>
                                    <span>{track.track.album.release_date.slice(0, 4)}</span>
                                </p>
                                <div className="item__img">
                                    <img src={track.track.album.images[1].url} alt="" />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            <div className="background"></div>
        </main>
    )
}
