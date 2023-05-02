import React, { useState } from 'react';
import styles from './PopupLogin.module.scss';
import classnames from 'classnames/bind';
import InputStyle from '../InputStyle';
import ButtonStyles from '../ButtonStyles'

const cx = classnames.bind(styles);

function PopupLogin(props) {
    const [show, setShow] = useState(false);

    const togglePopup = () => {
        setShow(!show);
    };

    return (
        <div>
            <button className={cx('buttonOne')} onClick={togglePopup}>
                {props.text}
            </button>
            {show && (
                <div className={cx('popup')}>
                    <div className={cx('popup-inner')}>
                        <button className={cx('close-btn')} onClick={togglePopup}>
                        <ButtonStyles buttonStyles={'buttonThree'} text={'X'}/>
                        </button>
                        
                        <div className={cx('area_input')}>
                            <h1 className={cx('area_input_h1')}>LOGIN</h1>
                            <div className={cx('wrap_input')}>
                                <span className={cx('wrap_input_text')}>Username:</span>
                                <InputStyle textPlaceHolder={'Username...'} type={'text'} />
                            </div>
                            <div className={cx('wrap_input')}>
                                <span className={cx('wrap_input_text')}>Password:</span>
                                <InputStyle textPlaceHolder={'Password...'} type={'password'}/>
                            </div>
                            <div className={cx('wrap_checkbox')}>
                                <input type="checkbox" id="showPassword" name="showPassword" value=""/>
                                <label for="showPassword">Show password</label>
                            </div>
                            <ButtonStyles buttonStyles={'buttonTwo'} text={'Login'}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupLogin;
