import classNames from 'classnames/bind';
import styles from './Entrance.module.scss';
import ButtonStyles from '../../components/common/ButtonStyles';
import GateCard from './GateCard';

const cx = classNames.bind(styles);

function Entrance() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('firstSection')}>
                <div className={cx('wrap_text')}>
                    <h1 className={cx('wrap_text_h1')}>HELLO!</h1>
                    <h2 className={cx('wrap_text_h2')}>THIS IS A WEB LEARNING CHINESE</h2>
                    <p className={cx('wrap_text_p')}>
                        JOIN OUR TEAM TO LEARNING CHINESE AND BECOME A PRO IN 6
                        MONTHS
                    </p>
                    <ButtonStyles
                        buttonStyles={'buttonTwo'}
                        text={'JOIN US!'}
                    />
                </div>
                <div className={cx('wrap_img')}>
                    <img
                        src={process.env.PUBLIC_URL + '/svg/vietnam.svg'}
                        alt="vietnam"
                    ></img>
                    <img
                        src={process.env.PUBLIC_URL + '/svg/china.svg'}
                        alt="china"
                    ></img>
                </div>
            </section>

            <section className={cx('secondSection')}>
                <GateCard account={'Student'} urlImage={process.env.PUBLIC_URL + '/svg/student.svg'}/>
                <GateCard account={'Teacher'} urlImage={process.env.PUBLIC_URL + '/svg/teacher.svg'}/>
                <GateCard account={'Admin'} urlImage={process.env.PUBLIC_URL + '/svg/admin.svg'}/>
            </section>
        </div>
    );
}

export default Entrance;
