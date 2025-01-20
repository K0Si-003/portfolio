// import TabContent from "./components/TabContent.jsx";
import Code from '../assets/images/code-icon.svg?react'
import Tools from '../assets/images/tools-icon.svg?react'
import TechnoTab from '../components/TechnoTab.jsx'
import ToolsTab from '../components/ToolsTab.jsx'

const tabs = [
    {
        title: 'Techno',
        id: 'techno',
        icon: <Code />,
        color: 'hsl(12.88, 87.21%, 57.06%)',
        content: <TechnoTab />
    },
    {
        title: 'Outils',
        id: 'tools',
        icon: <Tools />,
        color: 'hsl(214, 49.35%, 50%)',
        content: <ToolsTab />
    }
]

export default tabs
