import { useState, useEffect } from 'react'
import { getSavedTracks } from '../services/SpotifyAPI.js'
import tabsContent from '../data/tabsContent.jsx'
import Tabs from '../components/Tabs.jsx'

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
                        Salut, moi c'est Hugo, développeur front-end basé à Lyon. Je vous souhaites
                        la bienvenue sur mon petit bout d'internet. Ici je vous partagerais mes
                        projets réalisés, mes dernières expérimentations et de quoi en apprendre un
                        peu plus sur moi et mon parcours.
                    </span>
                </p>
                <p className="about__text">
                    <span>
                        Me concernant, ma première rencontre avec le monde du web se fait il y a
                        quelques années déjà, à une époque où Flash et ActionScript étaient encore
                        d'actualité. Dans un premier temps je me suis intéresser pour le web design,
                        les questions d'UX/UI, comment faire un site web facilement. Et déjà, avec
                        comme objectif: comment animer une pages web.
                    </span>
                </p>
                <p className="about__text">
                    <span>
                        C'est par la suite, avec une formation à la Wild Code School, que je plonge
                        dans le grand bain du développement web, avec l'apprentisage de tous les
                        outils du développement web moderne. J'y ai acquis des bases techniques
                        (lien section skills) et méthodologiques.
                    </span>
                </p>
                <p className="about__text">
                    <span>
                        C'est ensuite par mes expériences professionelles, en start-up et en agence
                        que j'ai pu progresser sur le terrain. J'ai pu y apprendre l'utilisation de
                        nouveau outils, les bonnes pratiques pour le réferencement. Je me suis aussi
                        formé de mon côté sur de la 3D orienté web. L'utilisation de Three.js, React
                        Three Fiber et Blender.
                    </span>
                </p>
                <p className="about__text">
                    <span>
                        Comme prochaine étape de mon parcours, je souhaiterais approfondir les
                        frameworks orienté SSR, passé a typescript et continuer de monter en
                        compétences sur le web 3D avec les nouvelles technologies comme les shaders
                        via TSL.
                    </span>
                </p>
            </section>
            <section className="about__skills container-full">
                <div className="skills__text container">
                    <h2>Compétences</h2>
                    <p>
                        <span className="about__text">
                            Voici un petit aperçu des outils et langages que j'utilise pour mes projets.
                        </span>
                    </p>
                </div>
                <div className="skills__tabs container">
                    <Tabs tabs={tabsContent} />
                </div>
            </section>
            <section className="about__spotify container-md">
                <h2 className="about__title">Spotify</h2>
                <p>Un petit coin pour découvrir les dernières pépites dans mes oreilles</p>
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
