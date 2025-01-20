// import TabContent from "./components/TabContent.jsx";
import Code from '../assets/images/code-icon.svg?react'
import Tools from '../assets/images/tools-icon.svg?react'

const tabs = [
    {
        title: 'Techno',
        id: 'techno',
        icon: <Code />,
        color: 'hsl(12.88, 87.21%, 57.06%)',
        content: (
            <div className="techno">
                <h1>Techno</h1>
                <ul>
                    <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                        repellendus, voluptate deleniti ducimus sunt ea tempora. Similique ratione
                        asperiores officiis aperiam modi inventore, autem eligendi voluptates,
                        quaerat obcaecati aliquam nulla.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam
                        sunt deleniti similique excepturi vero rem, cupiditate perferendis tenetur
                        adipisci repudiandae fuga, veritatis in blanditiis facere dolores qui
                        debitis odit?
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Outils',
        id: 'tools',
        icon: <Tools />,
        color: 'hsl(214, 49.35%, 50%)',
        content: (
            <div className="tools">
                <h1>Outils</h1>
                <ul>
                    <li>
                        Rerum atque fuga nostrum animi labore. Voluptatem natus atque explicabo
                        nihil, laborum error sapiente quod mollitia laboriosam blanditiis officiis
                        hic voluptatum quam! Quasi mollitia voluptate libero eos nobis reprehenderit
                        quibusdam?
                    </li>
                    <li>
                        Animi nihil quia doloremque eos voluptas eaque accusamus voluptatibus
                        adipisci exercitationem architecto, error hic, quis nobis esse odio
                        voluptates tempora commodi molestias! Obcaecati repellendus totam ex
                        corrupti ipsa, doloremque earum.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita
                        corrupti, perferendis eum ipsum libero dicta sapiente, debitis nesciunt quo,
                        natus autem reiciendis numquam delectus. Fugiat provident sequi dignissimos
                        aliquid.
                    </li>
                    <li>
                        Nulla ratione dolores tenetur id in. Cum eaque unde facilis ex atque
                        expedita, sequi consequatur. Sunt, odit iste! In delectus ratione velit
                        fugiat, odio dolore corrupti dolores aliquid nihil blanditiis.
                    </li>
                </ul>
            </div>
        ),
    },
]

export default tabs
