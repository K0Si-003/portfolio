import cube from '../assets/images/projects/cube/cube.png'
import marble from '../assets/images/projects/marble/marble.png'
import particles from '../assets/images/projects/particles/particles.png'
import labservatoire from '../assets/images/projects/labservatoire/labservatoire.png'

const projects = [
    {
        id: 'cube-3d-puzzle',
        title: 'Cube Puzzle 3D',
        description: 'Projet de mini jeu vidéo en Three.js, inspiré par les casses-têtes INSIDE³ de Romain-Guirec Piotte.',
        image: cube,
        tags: ['React', 'Three.js', 'Rapier', 'Zustand', 'React Three Fiber', 'Blender'],
        link: 'https://cube-puzzle-3d.netlify.app'
    },
    {
        id: 'labservatoire',
        title: 'LABservatoire',
        description: 'Site vitrine pour l\'association LABservatoire.',
        image: labservatoire,
        tags: ['Grav', 'SCSS', 'Gulp'],
        link: 'labservatoire.org'
    },  
    {
        id: 'particles',
        title: 'Particles',
        description: 'Effet de particules sur la page d\'accueil, utilisant le Canvas 2d',
        image: particles,
        tags: ['HTML', 'JavaScript', 'CSS']
    },
    {
        id: 'marble-race',
        title: 'Marble Race',
        description: 'Mini jeu, fais pendant une formation Three.js.',
        image: marble,
        tags: ['React', 'React Three Fiber']
    },  
    {
        id: 'valiris',
        title: 'Valiris',
        description: 'Projet d\études, front office, back-office. Site vitrine et gestion de locations d\'appartement.',
        image: 'https://picsum.photos/800',
        tags: ['React', 'Node.js', 'Express']
    }
]

export default projects