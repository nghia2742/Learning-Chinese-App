import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function InputStyle(props) {
    return <input type={props.type} 
    className={cx('inputStyle')} 
    placeholder={props.textPlaceHolder}    
    />;
}

export default InputStyle;
