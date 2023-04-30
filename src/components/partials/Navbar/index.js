import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ButtonOne from '../../common/ButtonStyles';

const cx = classNames.bind(styles);

function Navbar() {
    return (
    <nav className={cx('navbar')}>
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('circle')}></div>
                OUR LOGO
            </div>
            <ButtonOne buttonStyles={'buttonOne'} text={'Vi'}/>
        </div>
    </nav>
    );
}

export default Navbar;
