import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel from './Carousel';
import { BsClockHistory, BsFire } from 'react-icons/bs';
import NewsItem from './NewsItem';

const cx = classNames.bind(styles);

const items = [
    { title: 'Item 1', image: 'https://dummyimage.com/250x150/54b4f9/fff' },
    { title: 'Item 2', image: 'https://dummyimage.com/250x150/54b4f9/fff' },
    { title: 'Item 3', image: 'https://dummyimage.com/250x150/54b4f9/fff' },
    { title: 'Item 4', image: 'https://dummyimage.com/250x150/54b4f9/fff' },
    { title: 'Item 5', image: 'https://dummyimage.com/250x150/54b4f9/fff' },
    { title: 'Item 6', image: 'https://dummyimage.com/250x150/54b4f9/fff' },
];

function Home() {
    return (
        <main className={cx('container')}>
            {/* BANNER */}
            <img
                src="https://dummyimage.com/1015x200/D7D7D7/fff"
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
