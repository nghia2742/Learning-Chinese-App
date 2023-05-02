import Navbar from '../../partials/Navbar';
import Footer from '../../partials/Footer';
import StudentSidebar from '../../partials/StudentSidebar';
import styles from './StudentLayout.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function StudentLayout({ children }) {
    return (
        <div>
            <div className={cx('container')}>
                <header>
                    <Navbar />
                </header>
                <main className={cx('main')}>
                    <div className={cx('left')}>
                        <StudentSidebar />
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export default StudentLayout;
