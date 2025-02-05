import Code from '../assets/images/code-icon.svg?react'
import Tools from '../assets/images/tools-icon.svg?react'
import {
    siHtml5,
    siCss3,
    siSass,
    siJavascript,
    siReact,
    siNodedotjs,
    siGrav,
    siWordpress,
    siGit,
    siLinux,
    siDocker,
    siGulp,
    siVite,
    siVscodium,
    siGithub,
    siFigma,
} from 'simple-icons'

const technoIcons = [
    { icon: siHtml5, color: '#E34F26', name: 'HTML5' },
    { icon: siCss3, color: '#1572B6', name: 'CSS3' },
    { icon: siSass, color: '#CC6699', name: 'SASS' },
    { icon: siJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { icon: siReact, color: '#61DAFB', name: 'React' },
    { icon: siNodedotjs, color: '#5FA04E', name: 'Node.js' },
    { icon: siGrav, color: '#A638F5', name: 'Grav' },
    { icon: siWordpress, color: '#21759B', name: 'WordPress' },
]

const toolsIcons = [
    { icon: siGit, color: '#F05032', name: 'Git' },
    { icon: siLinux, color: '#FCC624', name: 'Linux' },
    { icon: siDocker, color: '#2496ED', name: 'Docker' },
    { icon: siGulp, color: '#CF4647', name: 'Gulp' },
    { icon: siVite, color: '#646CFF', name: 'Vite' },
    { icon: siVscodium, color: '#2F80ED', name: 'VSCodium' },
    { icon: siGithub, color: '#181717', name: 'Github' },
    { icon: siFigma, color: '#F24E1E', name: 'Figma' },
]

const tabs = [
    {
        title: 'Techno',
        id: 'techno',
        icon: <Code />,
        color: 'hsl(12.88, 87.21%, 57.06%)',
        icons: technoIcons,
    },
    {
        title: 'Outils',
        id: 'tools',
        icon: <Tools />,
        color: 'hsl(214, 49.35%, 50%)',
        icons: toolsIcons,
    },
]

export default tabs
