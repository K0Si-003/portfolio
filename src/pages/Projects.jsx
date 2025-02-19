import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import projects from '../data/projects.js'
import { Link } from 'react-router'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const handleProjectClick = (project) => {
        setSelectedProject(project)
        document.body.style.overflow = 'hidden' // Désactiver le défilement du corps
    }

    const handleCloseProject = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'auto' // Activer le défilement du corps
    }

    return (
        <main className="projects">
            <section className="projects__intro container-md">
                <h1>Projets</h1>
                <p>Retrouvez mes derniers projets sur cette page.</p>
            </section>
            <section className="projects__gallery container">
                <ul className="projects__list">
                    {projects.map((project) => (
                        <li
                            key={project.title}
                            className="project__card"
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="card__wrapper">
                                <motion.div
                                    className="card__content"
                                    layoutId={`card-content-${project.id}`}
                                >
                                    <motion.div
                                        className="image__wrapper"
                                        layoutId={`image-wrapper-${project.id}`}
                                    >
                                        <img
                                            className="card__image"
                                            src={project.image}
                                            alt={`aperçu-${project.title}`}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="title__wrapper"
                                        layoutId={`title-wrapper-${project.id}`}
                                    >
                                        <h3>{project.title}</h3>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            style={{ pointerEvents: 'auto' }}
                            className="overlay"
                            onClick={() => handleCloseProject(null)}
                        />
                        <div className="card__wrapper open">
                            <motion.div
                                className="card__content"
                                layoutId={`card-content-${selectedProject.id}`}
                            >
                                <motion.div
                                    className="image__wrapper"
                                    layoutId={`image-wrapper-${selectedProject.id}`}
                                >
                                    <img
                                        className="card__image"
                                        src={selectedProject.image}
                                        alt={`aperçu-${selectedProject.title}`}
                                    />
                                </motion.div>
                                <motion.div
                                    className="title__wrapper"
                                    layoutId={`title-wrapper-${selectedProject.id}`}
                                >
                                    <h3>{selectedProject.title}</h3>
                                </motion.div>
                                <motion.div className="content__wrapper" animate>
                                    <div className="card__tags">
                                        {selectedProject.tags.map((tag) => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="card__text">
                                        <p>{selectedProject.description}</p>
                                    </div>
                                    {selectedProject.link && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            className="card__link"
                                        >
                                            Voir le projet
                                        </a>
                                    )}
                                </motion.div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
            <div className="background"></div>
        </main>
    )
}
