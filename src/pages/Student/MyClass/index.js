import classNames from 'classnames/bind';
import styles from './MyClass.module.scss';

const cx = classNames.bind(styles);

function MyClass() {
    return (
        <div className={cx('container')}>
            <h1>MyClass</h1>
        </div>
    );
}

export default MyClass;
