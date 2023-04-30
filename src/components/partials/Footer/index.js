import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return <footer className={cx('footer')}>
        FOOTER
    </footer>;
}

export default Footer;