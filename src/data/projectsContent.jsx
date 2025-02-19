import cube from '../assets/images/projects/cube/cube.png'
import marble from '../assets/images/projects/marble/marble.png'
import particles from '../assets/images/projects/particles/particles.png'
import labservatoire from '../assets/images/projects/labservatoire/labservatoire.png'

const projects = [
    {
        id: 'cube-3d-puzzle',
        title: 'Cube Puzzle 3D',
        description: 
        <p>
            Projet de mini jeu vidéo utilisant <span>Three.js</span>, inspiré par les casses-têtes <span>INSIDE³</span> de Romain-Guirec Piotte.
        </p>,
        image: cube,
        tags: ['Three.js', 'React', 'Rapier', 'Zustand', 'React Three Fiber', 'Blender'],
        link: 'https://cube-puzzle-3d.netlify.app',
        github: 'https://github.com/K0Si-003/cube-puzzle-3d'
    },
    {
        id: 'labservatoire',
        title: 'LABservatoire',
        description:
        <p>
            Site vitrine pour l'association LABservatoire.
        </p>,
        image: labservatoire,
        tags: ['Grav', 'SCSS', 'Gulp'],
        link: 'labservatoire.org'
    },  
    {
        id: 'particles',
        title: 'Particles',
        description:
        <p>
            Effet de particules sur la page d'accueil, utilisant le Canvas 2d.
        </p>,
        image: particles,
        tags: ['HTML', 'JavaScript', 'CSS']
    },
    {
        id: 'marble-race',
        title: 'Marble Race',
        description:
        <p>
            'Mini jeu, fais pendant une formation Three.js.'
        </p>,
        image: marble,
        tags: ['React', 'React Three Fiber']
    },  
    {
        id: 'valiris',
        title: 'Valiris',
        description:
        <p>
            Projet d'études, front office, back-office. Site vitrine et gestion de locations d'appartement.
        </p>,
        image: 'https://picsum.photos/800',
        tags: ['React', 'Node.js', 'Express']
    }
]

export default projects