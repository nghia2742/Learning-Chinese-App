import classNames from 'classnames/bind';
import styles from './InputStyle.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function InputStyle(props) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        props.onChange(value);
    };

    return (
        <div>
            <input
                type={props.type ? props.type : 'text'}
                className={cx('inputStyle')}
                placeholder={props.textPlaceHolder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default InputStyle;
