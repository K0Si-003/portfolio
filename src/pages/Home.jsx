import { useState, useEffect } from 'react'
import Particles from '../components/Particles.jsx'
import ReactFullpage from '@fullpage/react-fullpage'
import Button from '../components/Button.jsx'
import { useProgress } from '@react-three/drei'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    const { progress } = useProgress()

    // Loader for contact page model
    useEffect(() => {
        if (progress === 100) {
            setIsLoaded(true)
        }
    }, [progress])

    const [isScrollBtnActive, setIsScrollBtnActive] = useState(true)
    const anchors = ['index', 'projects', 'about', 'contact']

    const onLeave = (origin, destination, direction) => {
        if (origin.index === 0) {
            setIsScrollBtnActive(false)
        } else if (destination.index === 0) {
            setIsScrollBtnActive(true)
        }
    }

    return (
        <main>
            <ReactFullpage
                anchors={anchors}
                navigation
                navigationPosition={'left'}
                onLeave={onLeave}
                slidesNavigation={false}
                scrollingSpeed={1200}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h1 className="title">
                                            <span className="title__line">Portfolio</span>
                                            <span className="title__line">Web Developer</span>
                                        </h1>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">Bienvenue sur mon site</p>
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h2 className="title">Projets</h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Venez découvrir mes derniers projets et expérimentations
                                        </p>
                                        <Button route={'/projects'} className={'btn-home'} />
                                    </div>
                                    <div className="image image-project">
                                        <div className="image-over">
                                            <div className="image-cover"></div>
                                            <div className="image-cover"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h2 className="title">À propos</h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Je vous partage ici un peu plus sur mes compétences et
                                            inspirations.
                                        </p>
                                        <Button route={'/about'} className={'btn-home'} />
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h2 className="title">Contact</h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Pour toutes demandes, ça se passe ici.
                                        </p>
                                        <Button route={'/contact'} className={'btn-home'} />
                                    </div>
                                    <div className="image image-contact">
                                        <div className="image-over">
                                            <div className="image-cover"></div>
                                            <div className="image-cover"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
            <p className={`scrolldown ${isScrollBtnActive ? 'active' : 'inactive'}`}>SCROLL ⇒</p>
            <div className="background">
                <Particles />
            </div>
            <div className={`curtain ${isLoaded ? 'hidden' : ''}`}>
                {!isLoaded && (
                    <svg
                        className="spinner"
                        width="51px"
                        height="51px"
                        viewBox="0 0 52 52"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="path"
                            fill="none"
                            strokeWidth="5"
                            strokeLinecap="round"
                            cx="26"
                            cy="26"
                            r="23"
                        ></circle>
                    </svg>
                )}
            </div>
        </main>
    )
}
