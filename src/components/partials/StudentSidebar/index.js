import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import LinkStyle from '../../common/LinkStyle';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './StudentSidebar.module.scss';

const cx = classNames.bind(styles);

const sidebarItems = [
    {
        id: 1,
        url: '/student/home',
        title: 'Home',
        key: 'home',
        icon: <AiOutlineHome />,
    },
    {
        id: 2,
        url: '/student/lookup',
        title: 'Look up',
        key: 'lookup',
        icon: <BiSearch />,
    },
    {
        id: 3,
        url: '/student/courses',
        title: 'Courses',
        key: 'courses',
        icon: <AiOutlineBook />,
    },
    {
        id: 4,
        url: '/student/myclass',
        title: 'My class',
        key: 'myclass',
        icon: <BsPeople />,
    },
];

function StudentSidebar() {
    const url = window.location.href;
    const currentPage = url.substring(url.lastIndexOf('/') + 1);
    
    const [activePage, setActivePage] = useState(currentPage);

    const handleClick = (page) => {
        setActivePage(page);
    };

    return (
        <ul className={cx('sidebarStudent')}>
            {sidebarItems.map((item, index) => (
                <li key={index} onClick={() => handleClick(item.key)}>
                    <LinkStyle
                        isActive={activePage === item.key ? true : false}
                        icon={item.icon}
                        url={item.url}
                        title={item.title}
                    ></LinkStyle>
                </li>
            ))}
        </ul>
    );
}

export default StudentSidebar;
