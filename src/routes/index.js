//LAYOUTS
import StudentLayout from '../components/layouts/StudentLayout';

//GENERAL PAGE
import Entrance from '../pages/Entrance';
import Register from '../pages/Register';

// STUDENT PAGE
import Home from '../pages/Student/Home';
import Lookup from '../pages/Student/Lookup';
import Courses from '../pages/Student/Courses';
import MyClass from '../pages/Student/MyClass';

const publicRoutes = [
    
    { path: '/', component: Entrance },
    { path: '/register', component: Register },

    // Student
    { path: '/student/home', component: Home, layout: StudentLayout },
    { path: '/student/lookup', component: Lookup, layout: StudentLayout },
    { path: '/student/courses', component: Courses, layout: StudentLayout },
    { path: '/student/myclass', component: MyClass, layout: StudentLayout },

    //Teacher
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
