import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return ( 
    <div className={cx('navbar')}>Navbar</div> 
    );
}

export default Navbar;