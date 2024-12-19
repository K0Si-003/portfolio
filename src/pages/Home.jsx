import { useState } from 'react'
import Particles from '../components/Particles.jsx'
import ReactFullpage from '@fullpage/react-fullpage'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    // Fake loading for curtain
    setTimeout(() => {
        setIsLoaded(true)
    }, 300)

    const [activeScrollBtn, setActiveScrollBtn] = useState(true)
    const anchors = ['home', 'projects', 'about', 'contact']
    const onLeave = (origin, destination, direction) => {
        if (origin.index === 0) {
            setActiveScrollBtn(false)
        } else if (destination.index === 0) {
            setActiveScrollBtn(true)
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
                                <div className="container">
                                    <div
                                        className="text text-top"
                                        id="section1"
                                    >
                                        <h1 className="title">
                                            Hugo <br />
                                            Pioda
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
                                <div className="container">
                                    <div className="text" id="section1">
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
                                <div className="container">
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
                                <div className="container">
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
                    activeScrollBtn ? 'active' : 'inactive'
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
