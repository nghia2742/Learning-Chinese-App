import classNames from 'classnames/bind';
import styles from './Lookup.module.scss';
import InputStyle from '../../../components/common/InputStyle';
import ButtonStyles from '../../../components/common/ButtonStyles';
import Loader from '../../../components/common/Loader';
import { useState } from 'react';

const cx = classNames.bind(styles);

const dictionaryList = [
    {
        word: 'apple',
        definition:
            'a round fruit with red, yellow, or green skin and firm white flesh',
        example: 'She took a bite out of the apple.',
    },
    {
        word: 'book',
        definition:
            'a written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
        example: 'I bought a new book yesterday.',
    },
    {
        word: 'computer',
        definition:
            'an electronic device that can store, retrieve, and process data.',
        example: 'I spend a lot of time on my computer.',
    },
];

function Lookup() {
    const [word, setWord] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleInputChange = (value) => {
        setWord(value);
    };

    const handleSubmit = () => {
        const normalizeWord = word.toLowerCase();
        const findWord = dictionaryList.find((e) => e.word === normalizeWord);
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);

        if (findWord) {
            setResult(findWord);
        } else {
            setResult(false);
        }
        setIsLoading(true)
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
                <div>
                    <ButtonStyles
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
                                        <h1 className={cx('result_keyword')}>
                                            {result.word}
                                        </h1>
                                        <p className={cx('result_definition')}>
                                            <b>Definition: </b>
                                            {result.definition}
                                        </p>
                                        <p className={cx('result_example')}>
                                            <b>Example: </b>
                                            {result.example}
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
