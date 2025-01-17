import { useState } from 'react'
import Particles from '../components/Particles.jsx'
import ReactFullpage from '@fullpage/react-fullpage'
import { NavLink } from 'react-router'
import Button from '../components/Button.jsx'

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
            <p className={`scrolldown ${isScrollBtnActive ? 'active' : 'inactive'}`}>SCROLLDOWN</p>
            <div className="background">
                <Particles />
            </div>
            <div className={`curtain ${isLoaded ? 'hidden' : ''}`}></div>
        </main>
    )
}
