import classNames from 'classnames/bind';
import styles from './ButtonStyles.module.scss';

const cx = classNames.bind(styles);

function ButtonStyles(props) {
    const { buttonStyles } = props;
    return <button onClick={props.submit} className={cx(buttonStyles)}>{props.text}</button>;
}

export default ButtonStyles;