import classNames from 'classnames/bind';
import styles from './NewsItem.module.scss';

const cx = classNames.bind(styles);

function NewsItem() {
    return (
        <div className={cx('news_item')}>
            <div className={cx('news_item_content')}>
                <h3 className={cx('news_title')}>
                    Title of news Title of news Title of news
                </h3>
                <p className={cx('news_content')}>
                    Lorem velit est esse Lorem velit adipisicing amet pariatur
                    ullamco consectetur id. Est sint occaecat occaecat eu enim.
                    Consequat dolore exercitation ipsum commodo minim Lorem
                    dolor. Ut irure do occaecat esse in culpa eiusmod
                    consectetur commodo aute commodo magna. Reprehenderit
                    eiusmod veniam duis dolor et amet minim pariatur irure
                    commodo sint consectetur. Aute cupidatat qui irure
                    adipisicing enim cillum.
                </p>
            </div>
        </div>
    );
}

export default NewsItem;
