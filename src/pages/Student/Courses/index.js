import classNames from 'classnames/bind';
import styles from './Courses.module.scss';

const cx = classNames.bind(styles);

function Courses() {
    return (
        <div className={cx('container')}>
            <h1>Courses</h1>
        </div>
    );
}

export default Courses;
