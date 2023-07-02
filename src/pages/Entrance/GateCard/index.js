import Tooltip from '../../../components/common/Tooltip';
import Popup from '../../../components/common/PopupLogin';
import styles from './GateCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function GateCard(props) {
    return ( 
        <div className= {cx('wrapper')}>
            <h3 className= {cx('wrapper_h3')}>Login with</h3>
            <h1 className= {cx('wrapper_h1')}>{props.account}</h1>
            <div className={cx('wrap_button')}>
                <Popup text={'GO!'} role={props.account.toLowerCase()}/>
            </div>
            <div className={cx('bgCustomize')}>
                <img src={props.urlImage} alt=''/>
            </div>
            <div className={cx('hint')}>
                <Tooltip title={props.hint}/>
            </div>
        </div>
     );
}

export default GateCard;