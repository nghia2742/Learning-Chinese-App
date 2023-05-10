import Navbar from '../../partials/Navbar';
import Footer from '../../partials/Footer';
import StudentSidebar from '../../partials/StudentSidebar';
import styles from './StudentLayout.module.scss';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classnames.bind(styles);

function StudentLayout({ children }) {
    const [sidebar, setSidebar] = useState(false);

    const handleChildButtonClick = (newValue) => {
        setSidebar(newValue);
    };

    function disableScroll(sidebar) {
        if (sidebar) {
            // Get the current page scroll position
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            let scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft;

            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
            return;
        }
        window.onscroll = function () {};
    }

    useEffect(() => {
        disableScroll(sidebar);
    }, [sidebar]);

    return (
        <div>
            <div className={cx('container')}>
                <header>
                    <Navbar
                        isHamburger={true}
                        sidebar={sidebar}
                        onButtonClick={handleChildButtonClick}
                    />
                </header>
                <main className={cx('main')}>
                    <div className={cx('left')}>
                        <StudentSidebar isSidebar={sidebar} />
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
