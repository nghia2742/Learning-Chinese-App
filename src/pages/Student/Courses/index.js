import classNames from 'classnames/bind';
import styles from './Courses.module.scss';
import Tabs from './Tabs';

const cx = classNames.bind(styles);

const tabs = [
    {
        label: 'All',
        content: [
            {
                image: 'Hawaii.jpg',
                title: 'Title of FIRST course 1',
                subTitle:
                    'Cupidatat qui ullamco ad dolor excepteur nulla eiusmod reprehenderit veniam id aliqua officia. Minim anim commodo laborum officia esse do duis aute incididunt tempor laborum sint dolore. Id consequat incididunt officia reprehenderit elit exercitation irure magna esse. Cupidatat qui ullamco ad dolor excepteur nulla eiusmod reprehenderit veniam id aliqua officia. Minim anim commodo laborum officia esse do duis aute incididunt tempor laborum sint dolore. Id consequat incididunt officia reprehenderit elit exercitation irure magna esse.',
            },
            {
                image: 'Hawaii.jpg',
                title: 'Title of FIRST course 2',
                subTitle:
                    'Cupidatat qui ullamco ad dolor excepteur nulla eiusmod reprehenderit veniam id aliqua officia. Minim anim commodo laborum officia esse do duis aute incididunt tempor laborum sint dolore. Id consequat incididunt officia reprehenderit elit exercitation irure magna esse.',
            },
        ],
    },
    {
        label: 'Recommend',
        content: [
            {
                image: 'Hawaii.jpg',
                title: 'Title of SECOND course',
                subTitle:
                    'Occaecat commodo non aute ut mollit minim labore duis nostrud amet ipsum.',
            },
        ],
    },
    {
        label: 'Active courses',
        content: [
            {
                image: 'Hawaii.jpg',
                title: 'Title of THIRD course',
                subTitle:
                    'Occaecat commodo non aute ut mollit minim labore duis nostrud amet ipsum.',
            },
        ],
    },
];

function Courses() {
    return (
        <div className={cx('container')}>
            <h1>My Courses</h1>
            {/* My Courses */}
            <div className={cx('myCourses')}>
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}

export default Courses;
