import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import cn from 'classnames'
import { li } from 'motion/react-client'

export default function Tabs({ tabs, defaultIndex = 0 }) {
    const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex)

    const onTabClick = (index) => {
        setActiveTabIndex(index)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--active-color', tabs[activeTabIndex].color)
    }, [activeTabIndex, tabs])

    const tabContentVariant = {
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        inactive: {
            opacity: 0,
            y: 15,
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <>
            <nav className="tabs__nav">
                <ul className="tabs__list">
                    {tabs.map((tab, index) => (
                        <motion.li
                            key={tab.id}
                            className={cn('tab', { active: activeTabIndex === index })}
                            onClick={() => onTabClick(index)}
                        >
                            {tab.icon}
                            <h3>{tab.title}</h3>
                            {activeTabIndex === index ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <div className="tabs__content">
                {tabs.map((tab, index) => (
                    <motion.div
                        key={tab.id}
                        id={`${tab.id}-content`}
                        className={cn('tab__content', { active: activeTabIndex === index })}
                        animate={activeTabIndex === index ? 'active' : 'inactive'}
                        variants={tabContentVariant}
                    >
                        {tab.content}
                    </motion.div>
                ))}
            </div>
        </>
    )
}
