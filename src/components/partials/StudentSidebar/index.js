import { Link } from 'react-router-dom';

function StudentSidebar({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/student/home">Home</Link>
                </li>
                <li>
                    <Link to="/student/lookup">Look up</Link>
                </li>
                <li>
                    <Link to="/student/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/student/myclass">My Class</Link>
                </li>
            </ul>
        </div>
    );
}

export default StudentSidebar;
