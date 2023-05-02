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
                <Popup text={'GO!'}/>
            </div>
            <div className={cx('bgCustomize')}>
                <img src={props.urlImage} alt='' width={150}/>
            </div>
        </div>
     );
}

export default GateCard;