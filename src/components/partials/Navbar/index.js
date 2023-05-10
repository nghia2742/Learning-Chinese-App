import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import ButtonOne from '../../common/ButtonStyles';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Navbar(props) {

    const handleButtonClick = () => {
        props.onButtonClick(!props.sidebar);
    };

    const btnRegister = (
        <Link to={'/register'}>
            <ButtonOne buttonStyles={'buttonFour'} text={'Register'} />
        </Link>
    );

    const btnHamburger = (
        <span className={cx('btnHamburger')} onClick={handleButtonClick}>
            {props.sidebar?<AiOutlineClose/>:<BiMenuAltRight/>}
        </span>
    );

    return (
        <nav className={cx('navbar')}>
            <div className={cx('wrapper')}>
                <Link to={'/'} className={cx('logo')}>
                    <div className={cx('circle')}></div>
                    越爱学汉语
                </Link>
                <div className={cx('rightSide')}>
                    {props.isEntrance ? btnRegister : ''}
                    <ButtonOne buttonStyles={'buttonOne'} text={'Vi'} />
                    {props.isHamburger ? btnHamburger : ''}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
