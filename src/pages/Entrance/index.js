import classNames from 'classnames/bind';
import styles from './Entrance.module.scss';
import ButtonStyles from '../../components/common/ButtonStyles';
import GateCard from './GateCard';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Entrance() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('firstSection')}>
                <div className={cx('behind_wrap_text')}>
                    <div className={cx('wrap_text')}>
                        <h1 className={cx('wrap_text_h1')}>WELCOME!</h1>
                        <h3 className={cx('wrap_text_h3')}>
                            LET'S HELP YOU BETTER
                        </h3>
                        <p className={cx('wrap_text_p')}>
                        Join our team to learning chinese and become a pro in 6 months
                        </p>
                        <Link to={'/student/home'} className={cx('btnBanner')}>
                            <ButtonStyles
                                buttonStyles={'buttonFour'}
                                text={'EXPLORE NOW'}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section className={cx('secondSection')}>
                <h1 className={cx('labelLogin')}>JOIN TO US WITH A ROLE</h1>
                <div className={cx('listLogin')}>
                    <GateCard
                        account={'Student'}
                        hint={'TEST: test/123123'}
                        urlImage={process.env.PUBLIC_URL + '/svg/student.svg'}
                    />
                    <GateCard
                        account={'Teacher'}
                        urlImage={process.env.PUBLIC_URL + '/svg/teacher.svg'}
                    />
                    <GateCard
                        account={'Admin'}
                        urlImage={process.env.PUBLIC_URL + '/svg/admin.svg'}
                    />
                </div>
            </section>
        </div>
    );
}

export default Entrance;
