import cube from '../assets/images/projects/cube/cube.png'

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
        image: 'https://picsum.photos/800',
        tags: ['Grav', 'SCSS', 'Gulp'],
        link: 'labservatoire.org'
    },
    {
        id: 'marble-race',
        title: 'Marble Race',
        description: 'Mini jeu, fais pendant une formation Three.js.',
        image: 'https://picsum.photos/800',
        tags: ['React', 'React Three Fiber']
    },    
    {
        id: 'particles',
        title: 'Particles',
        description: 'Effet de particules, utilisant le Canvas 2d',
        image: 'https://picsum.photos/800',
        tags: ['HTML', 'JavaScript', 'CSS']
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