import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';

const sidebarItems = [
    {
        id: 1,
        url: '/student/home',
        title: 'Home',
        key: 'home',
        icon: <AiOutlineHome />,
    },
    {
        id: 2,
        url: '/student/lookup',
        title: 'Look up',
        key: 'lookup',
        icon: <BiSearch />,
    },
    {
        id: 3,
        url: '/student/courses',
        title: 'Courses',
        key: 'courses',
        icon: <AiOutlineBook />,
    },
    {
        id: 4,
        url: '/student/myclass',
        title: 'My class',
        key: 'myclass',
        icon: <BsPeople />,
    },
    {
        id: 5,
        url: '/',
        title: 'logout',
        key: 'logout',
        icon: <CiLogout />,
    },
];

export default sidebarItems;
