import classNames from 'classnames/bind';
import styles from './MyClass.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const classList = [
    {
        image: 'imageClass.svg',
        nameClass: 'Learn Chinese in 3 months for HSK3',
        teacher: 'Mr. Lee',
    },
    {
        image: 'imageClass.svg',
        nameClass: 'Learn Chinese in 3 months for HSK3',
        teacher: 'Mr. Lee',
    },
    {
        image: 'imageClass.svg',
        nameClass: 'Learn Chinese in 3 months for HSK3',
        teacher: 'Mr. Lee',
    },
    {
        image: 'imageClass.svg',
        nameClass: 'Learn Chinese in 3 months for HSK3',
        teacher: 'Mr. Lee',
    },
];

function MyClass() {
    const srcImage = process.env.PUBLIC_URL + '/svg/';

    return (
        <div className={cx('container')}>
            <h1>My Class</h1>
            <div className={cx('wrap_class')}>
                {classList.map((e, index) => {
                    return (
                        <Link key={index} className={cx('card')}>
                            <img
                                className={cx('imageClass')}
                                src={srcImage + e.image}
                                alt=""
                            />
                            <div className={cx('wrap_text')}>
                                <h3 className={cx('nameClass')}>
                                    {e.nameClass}
                                </h3>
                                <p className={cx('teacher')}>Teaching by {e.teacher}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default MyClass;
