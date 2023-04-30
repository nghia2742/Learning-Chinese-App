import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function ButtonStyles(props) {
    const { buttonStyles } = props;
    return <button className={cx(buttonStyles)}>{props.text}</button>;
}

export default ButtonStyles;