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
                                            Welcome <br />
                                            to my portfolio
                                        </h1>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Web Developer
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h2 className="title">
                                            Latests <br />
                                            Projects
                                        </h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Check up my projects
                                        </p>
                                        <p className="link">
                                            <NavLink to="/projects">
                                                Learn more
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
                                        <h2 className="title">About Me</h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            More info about me
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="wrapper">
                                    <div className="text">
                                        <h2 className="title">Contact me</h2>
                                        <div className="separator">
                                            <span />
                                            <span />
                                        </div>
                                        <p className="subtitle">
                                            Web Developer
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
