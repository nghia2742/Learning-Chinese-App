import { Link } from 'react-router-dom';
import styles from './TabItem.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function TabItem(tab) {
    const content = tab.content;
    // const srcImage = process.env.PUBLIC_URL + '/images/' + image;
    const srcImage = 'https://picsum.photos/300/200/?random';

    return (
        <>
            {content.map((course, index) => {
                return (
                    <Link key={index} className={cx('card')}>
                        <div className={cx('leftCard')}>
                            <img
                                className={cx('imageCourse')}
                                src={srcImage}
                                alt=""
                            />
                        </div>
                        <div className={cx('rightCard')}>
                            <h2 className={cx('titleCourse')}>
                                {course.title}
                            </h2>
                            <p className={cx('subTitleCourse')}>
                                {course.subTitle}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default TabItem;
