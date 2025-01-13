import { useState } from 'react'
import Particles from '../components/Particles.jsx'
import ReactFullpage from '@fullpage/react-fullpage'
import { NavLink } from 'react-router'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    // Fake loading for curtain
    setTimeout(() => {
        setIsLoaded(true)
    }, 300)

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
                                            Portfolio <br />
                                            Web Developer
                                        </h1>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Bienvenue sur mon site
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h2 className="title">
                                            Projets
                                        </h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Venez découvrir mes derniers projets et expérimentations
                                        </p>
                                        <p className="link">
                                            <NavLink to="/projects">
                                                Voir plus
                                            </NavLink>
                                        </p>
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
                                        <h2 className="title">A propos</h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Je vous partage ici un peu plus sur mes compétences et inspirations.
                                        </p>
                                        <p className="link">
                                            <NavLink to="/about">
                                                Voir plus
                                            </NavLink>
                                        </p>
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
                                            Web Developer
                                        </p>
                                        <p className="link">
                                            <NavLink to="/contact">
                                                Voir plus
                                            </NavLink>
                                        </p>
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
            <p
                className={`scrolldown ${
                    isScrollBtnActive ? 'active' : 'inactive'
                }`}
            >
                SCROLLDOWN
            </p>
            <div className="background">
                <Particles />
            </div>
            <div className={`curtain ${isLoaded ? 'hidden' : ''}`}></div>
        </main>
    )
}
