import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ButtonOne from '../../common/ButtonStyles';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    return (
    <nav className={cx('navbar')}>
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('circle')}></div>
                OUR LOGO
            </div>
            <div className={cx('rightSide')}>
                <Link to={'/register'}>
                    <ButtonOne buttonStyles={'buttonFour'} text={'Register'}/>
                </Link>
                <ButtonOne buttonStyles={'buttonOne'} text={'Vi'}/>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
