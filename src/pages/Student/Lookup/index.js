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

    const [keyword, setKeyWord] = useState('');
    const [word, setWord] = useState('');
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (keyword === '') return;
        setIsLoading(true);
        fetch(`https://api-learnvncn.onrender.com/lookup?word=${keyword}`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setResult(data);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }, [keyword]);

    const handleInputChange = (value) => {
        setWord(value);
    };

    const handleSubmit = () => {
        navigate(`/student/lookup?word=${word}`);
        setKeyWord(word);
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
            {keyword === '' ? (
                <></>
            ) : (
                <div className={cx('wrap_result')}>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className={cx('result')}>
                                {!result.length ? (
                                    <div className={cx('notFound')}>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                '/svg/search.svg'
                                            }
                                            alt=""
                                        />
                                        <h1 className={cx('textNotFound')}>
                                            NOT FOUND
                                        </h1>
                                    </div>
                                ) : (
                                    <>
                                        <h1 className={cx('word')}>{result[0].word}</h1>

                                        <div className={cx('wordType')}>
                                            <span>【{result[0].type}】</span>
                                            <span>【{result[0].pinyin}】</span>
                                            <span>【{result[0].level}】</span>
                                        </div>
                                        <p>
                                            <b>Definition: </b>{' '}
                                            {result[0].meaning}
                                        </p>
                                        <p>
                                            <b>Example: </b> {result[0].example}
                                        </p>
                                        <span>
                                            <b>Linking word: </b>
                                            {result[0].linking_word.map(
                                                (e, index) => {
                                                    return (
                                                        <span key={index}>
                                                            <Link
                                                                className={cx(
                                                                    'wordDocument'
                                                                )}
                                                            >
                                                                {e}
                                                            </Link>
                                                            <span>&ensp;</span>
                                                        </span>
                                                    );
                                                }
                                            )}
                                        </span>
                                        <span>
                                            <b>Documents: </b>
                                            {result[0].text.map((e, index) => {
                                                return (
                                                    <span key={index}>
                                                        <Link
                                                            className={cx(
                                                                'wordDocument'
                                                            )}
                                                        >
                                                            {e}
                                                        </Link>
                                                        <span>&ensp;</span>
                                                    </span>
                                                );
                                            })}
                                        </span>
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
