import { useState, useEffect } from 'react'
import { getSavedTracks } from '../utils/SpotifyAPI.js'
import tabsContent from '../data/tabsContent.jsx'
import Tabs from '../components/Tabs.jsx'
import useMatchMedia from '../utils/useMatchMedia.jsx'

export default function About() {
    const [fetchingData, setFetchingStatus] = useState(true)
    const [savedTracks, setSavedTracks] = useState({})
    const [selectedTrackId, setSelectedTrackId] = useState(null)

    const isMobile = useMatchMedia('(max-width: 992px)')

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN

    useEffect(() => {
        Promise.all([getSavedTracks(client_id, client_secret, refresh_token)]).then((data) => {
            setSavedTracks(data[0])
            setFetchingStatus(false)
        })
        window.scrollTo(0, 0)
    }, [])

    const handleClick = (trackId) => {
        if (isMobile) {
            setSelectedTrackId(trackId === selectedTrackId ? null : trackId)
        }
    }

    return (
        <main className="about">
            <section className="about__info container-md">
                <h1 className="about__title">À propos</h1>
                <p className="about__text">
                    Salut, moi c'est Hugo, développeur front-end basé à Lyon. Je vous souhaites la
                    bienvenue sur mon petit bout d'internet. Ici je vous partagerais mes projets
                    réalisés, mes dernières expérimentations et de quoi en apprendre un peu plus sur
                    moi et mon parcours.
                </p>
                <p className="about__text">
                    Me concernant, ma première rencontre avec le monde du web se fait il y a
                    quelques années déjà, à une époque où Flash et ActionScript étaient encore
                    d'actualité. Dans un premier temps je me suis intéresser pour le web design, les
                    questions d'UX/UI, comment faire un site web facilement. Et déjà, avec comme
                    objectif: comment animer une pages web.
                </p>
                <p className="about__text">
                    Par la suite, c'est avec une formation à la Wild Code School, que je plonge dans
                    le grand bain du développement web, avec l'apprentisage de tous les outils du
                    développement web moderne. J'y ai acquis des bases{' '}
                    <span>
                        <a href="#skills">techniques</a>
                    </span>{' '}
                    et méthodologiques.
                </p>
                <p className="about__text">
                    Mes expériences personnelles et professionelles ont continuer de m'enrichir, et
                    j'ai pu progresser sur le terrain. J'ai pu y apprendre l'utilisation de nouveau
                    outils, les bases du réferencement. Je me suis aussi formé de mon côté sur de
                    les technologie de la 3D orienté web (WebGL). L'utilisation de Three.js, React
                    Three Fiber et Blender.
                </p>
                <p className="about__text">
                    Comme prochaine étape de mon parcours, je souhaiterais encore monter en
                    compétences sur divers outils. Les frameworks orienté SSR, typescript et
                    continuer d'apprendre sur le web 3D avec les dernières avancées amenées par l'
                    API WebGPU et les possibilités qu'elle offre.
                </p>
            </section>
            <section className="about__skills container-full" id="skills">
                <div className="skills__text container-md">
                    <h2 className="about__title">Compétences</h2>
                    <p className="about__text">
                        <span>
                            Voici un aperçu des langages et outils que j'utilise pour mes projets.
                        </span>
                    </p>
                </div>
                <div className="skills__tabs container-md">
                    <Tabs tabs={tabsContent} />
                </div>
            </section>
            <section className="about__bonus container-md">
                <h2 className="about__title">Hobbies</h2>
                <p className="about__text">
                    Escalade, jeux de société, montagne, poele à bois et sport de glisse. À la ville
                    ou dans la nature, j'aime découvrir de nouvelles choses et
                    m'enrichir de nouvelles expériences.
                </p>
                <p className="about__text">
                    <span>
                        J'ai un grand attrait pour la musique aussi, qui prend une place importante
                        dans mes journée. Je vous partage ici mes derniers coups de coeur musicaux.
                    </span>
                </p>
                {fetchingData ? (
                    <p>On dirais que Spotify ne veut pas nous montrer ma playlist...</p>
                ) : (
                    <ul className="spotify__grid">
                        {savedTracks.items.map((track) => (
                            <li
                                key={track.track.id}
                                className={`grid__item ${
                                    selectedTrackId === track.track.id ? 'selected' : ''
                                }`}
                                onClick={() => handleClick(track.track.id)}
                            >
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
