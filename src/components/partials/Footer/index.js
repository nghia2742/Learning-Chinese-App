import styles from './Footer.module.scss';
import className from 'classnames/bind';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

const cx = className.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt=''/>
                </div>
                <ul>
                    <h4>Navigation</h4>
                    <li>
                        <a href="/events"> Events</a>
                    </li>
                    <li>
                        <a href="/shop"> Pricing</a>
                    </li>
                    <li>
                        <a href="/about"> About us</a>
                    </li>
                    <li>
                        <a href="/contact"> Contact</a>
                    </li>
                </ul>
                <ul>
                    <h4>Policies</h4>
                    <li>
                        <a href="/">Customers</a>
                    </li>
                    <li>
                        <a href="/">Exchange & Refund</a>
                    </li>
                    <li>
                        <a href="/">Payments</a>
                    </li>
                </ul>
                <ul className={cx('social')}>
                    <h4>Social Media</h4>
                    <li><a href='/'><BsFacebook/> <span>Facebook</span></a></li>
                    <li><a href='/'><BsInstagram/> <span>Instagram</span></a></li>
                    <li><a href='/'><BsPinterest/> <span>Pinterest</span></a></li>
                </ul>
            </div>
            <p className={cx('rights')}>
                &copy; 2023 Learning Chinese. All rights reserved. By
                NgoTrongNghia
            </p>
        </div>
    );
}

export default Footer;
