import classNames from 'classnames/bind';
import styles from './LinkStyle.module.scss';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

const cx = classNames.bind(styles);

function LinkStyle(props) {

    const itemActive = props.isActive? "activeItem" : "";
    return (
        <div className={cx('wrap_item')}>
            <Link  className={cx('wrap_link', itemActive)} to={props.url}>
                <span className={cx('wrap_icon')}>{props.icon}</span>
                <span className={cx('wrap_url')}>{props.title}</span>
            </Link>
        </div>
    );
}

export default LinkStyle;
