import classNames from 'classnames/bind';
import styles from './Lookup.module.scss';
import InputStyle from '../../../components/common/InputStyle';
import ButtonStyles from '../../../components/common/ButtonStyles';
import Loader from '../../../components/common/Loader';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Lookup() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRlMzRjZWM0MjUwZGJiYzk2NTczZTIiLCJpYXQiOjE2ODMyOTI2NTEsImV4cCI6MTY4NDE1NjY1MX0.gvqHwfJs1yucikdoSQTXSpOtu3qv3PG6jvwWG5uY52Q';

    const [word, setWord] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dictionary, setDictionary] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api-learnvncn.onrender.com/lookup', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setDictionary(data))
            .catch((error) => console.error(error));
    }, []);

    const handleInputChange = (value) => {
        setWord(value);
    };

    const handleSubmit = () => {
        navigate(`/student/lookup?word=${word}`);
        setIsLoading(true);

        const lowerCaseKeyword = word.toLowerCase().trim();
        const findWord = dictionary.find((item) =>
            item.word.toLowerCase().includes(lowerCaseKeyword)
        );

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        if (findWord !== undefined) {
            setResult(findWord);
        } else {
            setResult(false);
        }
    };

    return (
        <main className={cx('container')}>
            {/* SEARCH */}
            <div className={cx('wrap_search')}>
                <h2>SEARCH:</h2>
                <div className={cx('inputSearch')}>
                    <InputStyle
                        onChange={handleInputChange}
                        textPlaceHolder={'Enter here...'}
                    />
                </div>
                <div className={cx('buttonSearch')}>
                    <ButtonStyles
                        disabled={word === '' ? true : false}
                        submit={handleSubmit}
                        buttonStyles={'buttonThree'}
                        text={'FIND'}
                    />
                </div>
            </div>

            {/* RESULT */}
            {result === '' ? (
                <></>
            ) : (
                <div className={cx('wrap_result')}>
                    <h2 className={cx('labelSearch')}>RESULT</h2>
                    <hr></hr>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className={cx('result')}>
                                {result === false ? (
                                    <div className={cx('notFound')}>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                '/svg/search.svg'
                                            }
                                            alt=""
                                            width={150}
                                        />
                                        <h1 className={cx('textNotFound')}>
                                            NOT FOUND
                                        </h1>
                                    </div>
                                ) : (
                                    <>
                                        <h1>{result.word}</h1>

                                        <div className={cx('wordType')}>
                                            <span>【{result.type}】</span>
                                            <span>【{result.pinyin}】</span>
                                            <span>【{result.level}】</span>
                                        </div>
                                        <p>
                                            <b>Definition: </b> {result.meaning}
                                        </p>
                                        <p>
                                            <b>Example: </b> {result.example}
                                        </p>
                                        <p>
                                            <b>Linking word: </b>
                                            {result.linking_word.map(
                                                (e, index) => {
                                                    return (
                                                        <>
                                                            <Link
                                                                className={cx(
                                                                    'wordDocument'
                                                                )}
                                                                key={index}
                                                            >
                                                                {e}
                                                            </Link>
                                                            <span>&ensp;</span>
                                                        </>
                                                    );
                                                }
                                            )}
                                        </p>
                                        <p>
                                            <b>Documents: </b>
                                            {result.bai_khoa.map((e, index) => {
                                                return (
                                                    <>
                                                        <Link
                                                            className={cx(
                                                                'wordDocument'
                                                            )}
                                                            key={index}
                                                        >
                                                            {e}
                                                        </Link>
                                                        <span>&ensp;</span>
                                                    </>
                                                );
                                            })}
                                        </p>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
        </main>
    );
}

export default Lookup;
