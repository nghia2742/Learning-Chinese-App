import React, { useState } from 'react';
import styles from './PopupLogin.module.scss';
import classnames from 'classnames/bind';
import InputStyle from '../InputStyle';
import ButtonStyles from '../ButtonStyles'

const cx = classnames.bind(styles);

function PopupLogin(props) {

    const [formLogin, setFormLogin] = useState('');
    
    const handleInputChange = (value) => {
        setFormLogin(value);
    };

    const handleSubmit = () => { 
        alert(formLogin)
    }

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
                        <div className={cx('close-btn')} onClick={togglePopup}>
                        <ButtonStyles buttonStyles={'buttonThree'} text={'X'}/>
                        </div>
                        
                        <div className={cx('area_input')}>
                            <h1 className={cx('area_input_h1')}>LOGIN</h1>
                            <div className={cx('wrap_input')}>
                                <InputStyle textPlaceHolder={'Username...'} onChange={handleInputChange} type={'text'} />
                            </div>
                            <div className={cx('wrap_input')}>
                                <InputStyle textPlaceHolder={'Password...'} onChange={handleInputChange} type={'password'}/>
                            </div>
                            <div className={cx('wrap_checkbox')}>
                                <input type="checkbox" id="showPassword" name="showPassword" value=""/>
                                <label htmlFor="showPassword">Show password</label>
                            </div>
                            <ButtonStyles buttonStyles={'buttonTwo'} submit={handleSubmit} text={'Login'}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupLogin;
