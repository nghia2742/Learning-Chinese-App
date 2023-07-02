import React, { useEffect, useState, useRef } from 'react';
import styles from './PopupLogin.module.scss';
import classnames from 'classnames/bind';
import ButtonStyles from '../ButtonStyles';
import Toast from '../Toast';

const cx = classnames.bind(styles);

function PopupLogin(props) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formLogin, setFormLogin] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPopupLogin, setShowPopupLogin] = useState(false);
    const [isNotify, setIsNotify] = useState(false);
    const [textNotify, setTextNotify] = useState('');
    const [typeNotify, setTypeNotify] = useState('');
    const role = props.role;

    useEffect(() => {
        if (isSubmitted) {
            fetch('https://api-learnvncn.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formLogin),
            })
                .then((response) => {
                    const data = response.json();
                    if (response.ok) {
                        return data;
                    }
                    return { dataPromise: data, error: true };
                })
                .then((data) => {
                    if (data.error) {
                        data.dataPromise.then((data) => {
                            const message = data.message;
                            setTypeNotify('error');
                            setTextNotify(message);
                            return setIsNotify(true);
                        });
                    } else {
                        setTypeNotify('success');
                        setTextNotify('Login successfully');
                        return setIsNotify(true);
                    }
                })
                .catch((error) => {
                    // Xử lý lỗi
                    console.error('Error:', error);
                });
            setIsSubmitted(false);
        }
    }, [isSubmitted, formLogin]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        setFormLogin({ username, password, role });

        if (username === '' || password === '') {
            setTypeNotify('error');
            setTextNotify('Please fill your information!');
            return setIsNotify(true);
        } else {
            setIsSubmitted(true);
        }
    };

    const togglePopup = () => {
        setShowPopupLogin(!showPopupLogin);
    };

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    if (isNotify) {
        setTimeout(() => {
            setIsNotify(false);
            if (typeNotify === 'success') {
                window.location.href = `/${role}/home`;
            }
        }, 3000);
    }

    return (
        <div>
            <Toast isNotify={isNotify} text={textNotify} type={typeNotify} />
            <button className={cx('buttonOne')} onClick={togglePopup}>
                {props.text}
            </button>
            {showPopupLogin && (
                <div className={cx('popup')}>
                    <div className={cx('popup-inner')}>
                        <div className={cx('close-btn')} onClick={togglePopup}>
                            <ButtonStyles
                                buttonStyles={'buttonThree'}
                                text={'X'}
                            />
                        </div>

                        <div className={cx('area_input')}>
                            <h1 className={cx('area_input_h1')}>LOGIN</h1>
                            <div className={cx('wrap_input')}>
                                <input
                                    className={cx('inputStyle')}
                                    ref={usernameRef}
                                    type="text"
                                    placeholder="Username..."
                                />
                            </div>
                            <div className={cx('wrap_input')}>
                                <input
                                    className={cx('inputStyle')}
                                    ref={passwordRef}
                                    type={isShowPassword ? 'text' : 'password'}
                                    placeholder="Password..."
                                />
                            </div>
                            <div className={cx('wrap_checkbox')}>
                                <input
                                    type="checkbox"
                                    id="showPassword"
                                    name="showPassword"
                                    onClick={() => handleShowPassword()}
                                    value=""
                                />
                                <label htmlFor="showPassword">
                                    Show password
                                </label>
                            </div>
                            <ButtonStyles
                                buttonStyles={'buttonTwo'}
                                submit={handleSubmit}
                                text={'Login'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupLogin;
