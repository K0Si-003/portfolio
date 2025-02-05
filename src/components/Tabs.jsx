import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import cn from 'classnames'
import Tab from './Tab.jsx'

export default function Tabs({ tabs, defaultIndex = 0 }) {
    const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex)

    const onTabClick = (index) => {
        setActiveTabIndex(index)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--active-tab-color', tabs[activeTabIndex].color)
    }, [activeTabIndex, tabs])

    return (
        <div className="tabs__wrapper">
            <nav className="tabs__header">
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
            <div className="tabs__content container-md">
                {tabs.map((tab, index) => (
                    <motion.div
                        key={tab.id}
                        className={cn('tab__content', { active: activeTabIndex === index })}
                        initial={{ opacity: 0, maxheight: 0, y: -10 }}
                        animate={
                            activeTabIndex === index
                                ? { opacity: 1, maxheight: 500, y: 0 }
                                : { opacity: 0, maxheight: 0, y: 10 }
                        }
                        transition={{ duration: 0.4 }}
                    >
                        {activeTabIndex === index && <Tab content={tab} />}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
