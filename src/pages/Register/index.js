import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import InputStyle from '../../components/common/InputStyle';
import ButtonStyles from '../../components/common/ButtonStyles';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('buttonBack')} to="/">
                <ButtonStyles buttonStyles={'buttonOne'} text={'BACK'}/>
            </Link>
            <h1 className={cx('wrap_h1')}>REGISTER</h1>
            <div className={cx('wrap_register_form')}>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <span className={cx('wrap_input_text')}>Name:</span>
                        <InputStyle textPlaceHolder={'Name...'}type={'text'}/>
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <span className={cx('wrap_input_text')}>Email:</span>
                        <InputStyle textPlaceHolder={'Email...'}type={'email'}/>
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <span className={cx('wrap_input_text')}>Username:</span>
                        <InputStyle textPlaceHolder={'Username...'}type={'text'}/>
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <span className={cx('wrap_input_text')}>Password:</span>
                        <InputStyle textPlaceHolder={'Password...'}type={'password'}/>
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <span className={cx('wrap_input_text')}>Confirm password:</span>
                        <InputStyle textPlaceHolder={'Confirm password...'}type={'password'}/>
                    </div>
                </div>
                <div className={cx('wrap_input')}>
                    <div className={cx('wrap_input')}>
                        <span className={cx('wrap_input_text')}>Account:</span>
                        <div className={cx('wrap_radio')}>
                            <ButtonStyles buttonStyles={'buttonFour'} text={'Student'}/>
                            <ButtonStyles buttonStyles={'buttonOne'} text={'Teacher'}/>
                        </div>
                    </div>
                </div>
                <ButtonStyles buttonStyles={'buttonTwo'} text={'Register'}/>
            </div>
        </div>
    );
}

export default Register;
