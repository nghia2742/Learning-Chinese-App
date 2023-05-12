import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import ButtonStyles from '../../components/common/ButtonStyles';
import { Link } from 'react-router-dom';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import Toast from '../../components/common/Toast';

const cx = classNames.bind(styles);

function Register() {
    const [formRegister, setFormRegister] = useState({});
    const [selectedValueGender, setSelectedValueGender] = useState('');
    const [selectedValueRole, setSelectedValueRole] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isNotify, setIsNotify] = useState(false);
    const [textNotify, setTextNotify] = useState('');
    const [typeNotify, setTypeNotify] = useState('');

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    
    
    const handleChangeGender = (event) => {
        setSelectedValueGender(event.target.value);
    };

    const handleChangeRole = (event) => {
        setSelectedValueRole(event.target.value);
    };

    //Validate Functions
    function validateEmail(email) {  
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function validatePassword(password, confirmPassword) {
        if (password.length < 6) {
            setTypeNotify('error');
            setTextNotify('Password minimum 6 characters');
            return setIsNotify(true);
        }

        if (password !== confirmPassword) {
            setTypeNotify('error');
            setTextNotify('Confirm password is wrong!');
            return setIsNotify(true);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const role = selectedValueRole;
        const gender = selectedValueGender;

        setFormRegister({name, gender, email, username, password, role });        

        // Process validate input
        if (username === '' 
        || name === ''
        || password === ''
        || email === ''
        || role === ''
        || gender === ''
        ) {
            setTypeNotify('error');
            setTextNotify('Please fill your information!');
            return setIsNotify(true);
        } 

        if (!validateEmail(email)) {
            setTypeNotify('error');
            setTextNotify('Check your email again!');
            return setIsNotify(true);
        }

        validatePassword(password, confirmPassword)

        // After validate, send Submit
        setIsSubmitted(true);
    };

    if (isNotify) {
        setTimeout(() => {
            setIsNotify(false);
        }, 3000);
    }

    console.log(formRegister);

    useEffect(() => {
        if (isSubmitted) {
            fetch('http://127.0.0.1:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formRegister),
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
                        setTextNotify('Register successfully');
                        return setIsNotify(true);
                    }
                })
                .catch((error) => {
                    // Xử lý lỗi
                    console.error('Error:', error);
                });
            setIsSubmitted(false);
        }
    }, [isSubmitted, formRegister]);

    return (
        <div className={cx('wrapper')}>
            <Toast isNotify={isNotify} text={textNotify} type={typeNotify} />
            <Link className={cx('buttonBack')} to="/">
                <ButtonStyles buttonStyles={'buttonOne'} text={'BACK'} />
            </Link>
            <h1 className={cx('wrap_h1')}>REGISTER</h1>
            <div className={cx('wrap_register_form')}>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <div className={cx('wrap_input_text')}>Name</div>
                        <input ref={nameRef} placeholder="Name..." type={'text'} />
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input_text')}>Gender</div>

                    <RadioGroup
                        name="gender"
                        value={selectedValueGender}
                        onChange={handleChangeGender}
                        row
                    >
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                    </RadioGroup>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <div className={cx('wrap_input_text')}>Email</div>
                        <input ref={emailRef} placeholder="Email..." type={'email'} />
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <div className={cx('wrap_input_text')}>Username</div>
                        <input ref={usernameRef} placeholder="Username..." type={'text'} />
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <div className={cx('wrap_input_text')}>Password</div>
                        <input ref={passwordRef} placeholder="Password..." type={'password'} />
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <div className={cx('wrap_input_text')}>
                            Confirm password
                        </div>
                        <input
                            ref={confirmPasswordRef}
                            placeholder="Confirm password..."
                            type={'password'}
                        />
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input_text')}>Role</div>

                    <RadioGroup
                        name="role"
                        value={selectedValueRole}
                        onChange={handleChangeRole}
                        row
                    >
                        <FormControlLabel
                            value="student"
                            control={<Radio />}
                            label="Student"
                        />
                        <FormControlLabel
                            value="teacher"
                            control={<Radio />}
                            label="Teacher"
                        />
                    </RadioGroup>
                </div>
                <ButtonStyles submit={handleSubmit} buttonStyles={'buttonTwo'} text={'Register'} />
            </div>
        </div>
    );
}

export default Register;
