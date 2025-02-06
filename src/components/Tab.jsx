import { useState } from 'react'
import IconSvg from './IconSvg.jsx'
import useMatchMedia from '../utils/useMatchMedia.jsx'

export default function Tab({ content }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const isMobile = useMatchMedia('(max-width: 992px)')

    return (
        <div>
            <ul className="tab__grid">
                {content.icons.map((item, index) => (
                    <li
                        key={index}
                        className={`grid__item ${hoveredIndex === index ? 'neon' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            '--neon-color': item.color,
                        }}
                    >
                        {item.name === 'VSCode' ? (
                            item.icon
                        ) : (
                            <IconSvg
                                icon={item.icon}
                                color={
                                    isMobile
                                        ? item.color
                                        : hoveredIndex === index
                                        ? item.color
                                        : 'var(--active-tab-color)'
                                }
                            />
                        )}

                        <span className={`icon__name ${hoveredIndex === index ? 'visible' : ''}`}>
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
