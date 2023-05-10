import LinkStyle from '../../common/LinkStyle';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './StudentSidebar.module.scss';
import sidebarItems from '../../../data/studentSidebar';

const cx = classNames.bind(styles);

function StudentSidebar(props) {
    const url = window.location.href;
    const currentPage = url.substring(url.lastIndexOf('/') + 1).split('?')[0];

    const [activePage, setActivePage] = useState(currentPage);

    const isSidebar = props.isSidebar?'sidebarActive':'';

    const handleClick = (page) => {
        setActivePage(page);
    };

    return (
        <>
            <ul className={cx('sidebarStudent', isSidebar?'sidebarActive':'')}>
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
        </>
    );
}

export default StudentSidebar;
