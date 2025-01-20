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

export default function TechnoTab() {
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
                <li>
                    <p>
                        Viendra ensuite Javascript
                        <IconSvg icon={siJavascript} color={'#F7DF1E'} />
                        et React
                        <IconSvg icon={siReact} color={'#61DAFB'} />
                        que j'ai découvert pendant ma formation à la Wild Code School.
                    </p>
                </li>
                <li>
                    <p>
                        J'ai été amener à utiliser Wordpress
                        <IconSvg icon={siWordpress} color={'#21759B'} />
                        pour des projets de site vitrine et plus récement Grav
                        <IconSvg icon={siGrav} color={'#A638F5'} />, un CMS flat-file sur une base
                        Symfony, que j'utilise avec Sass
                        <IconSvg icon={siSass} color={'#CC6699'} /> et Gulp
                        <IconSvg icon={siGulp} color={'#CF4647'} />
                    </p>
                </li>
            </ul>
        </div>
    )
}
