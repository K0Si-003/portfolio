import IconSvg from './IconSvg.jsx'
import {
    siReact,
    siHtml5,
    siCss3,
    siSass,
    siJavascript,
    siWordpress,
    siGrav,
    siGulp,
} from 'simple-icons'

export default function ToolsTab() {
    return (
        <div className="techno__tab">
            <ul>
                <li>
                    <p>
                        Comme dit plus haut, mon premier rapport avec la programmationa été avec
                        ActionScript. Par la suite j'ai rapidement découvert le HTML
                        <IconSvg icon={siHtml5} color={'#E34F26'} />
                        et le CSS
                        <IconSvg icon={siCss3} color={'#1572B6'} />.
                    </p>
                </li>
            </ul>
        </div>
    )
}
