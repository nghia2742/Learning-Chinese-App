import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import classnames from 'classnames/bind';
import TabItem from './TabItem';

const cx = classnames.bind(styles)

const Tabs = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div>
        {/* Navbar tabs */}
            <ul className={cx('wrap_navTabs')}>
                {tabs.map((tab, index) => (
                    <li 
                        key={index}
                        className={cx('navTab_item', activeTabIndex === index ? 'active' : '')}
                        onClick={() => handleTabClick(index)}
                    >   
                        {tab.label}
                    </li>
                ))}
            </ul>
          {/* Content of active tab */}
            <div className={cx('wrap_tabContent')}>
                  <TabItem content={tabs[activeTabIndex].content} />
            </div>
            
        </div>
    );
};

export default Tabs;
