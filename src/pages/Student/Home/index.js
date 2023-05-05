import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel from './Carousel';
import { BsClockHistory, BsFire } from 'react-icons/bs';
import NewsItem from './NewsItem';

const cx = classNames.bind(styles);

const items = [
    { title: 'Course 1', image: 'https://picsum.photos/250/150/?random' },
    { title: 'Course 2', image: 'https://picsum.photos/250/150/?random' },
    { title: 'Course 3', image: 'https://picsum.photos/250/150/?random' },
    { title: 'Course 4', image: 'https://picsum.photos/250/150/?random' },
    { title: 'Course 5', image: 'https://picsum.photos/250/150/?random' },
    { title: 'Course 6', image: 'https://picsum.photos/250/150/?random' },
];

function Home() {
    return (
        <main className={cx('container')}>
            {/* BANNER */}
            <img
                src="https://picsum.photos/1015/200/?random"
                className={cx('banner')}
                alt=""
            />

            {/* CAROUSEL */}
            <div className={cx('wrap_carousel')}>
                <h2 className={cx('title_section')}>
                    <span>
                        <BsClockHistory />
                    </span>
                    <span>Courses recently:</span>
                </h2>
                <Carousel items={items} />
            </div>

            {/* NEWS */}
            <div className={cx('wrap_news')}>
                <h2 className={cx('title_section')}>
                    <span>
                        <BsFire />
                    </span>
                    <span>News</span>
                </h2>
                <div className={cx('container_news')}>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>
        </main>
    );
}

export default Home;
