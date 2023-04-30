import Navbar from "../../partials/Navbar";
import StudentSidebar from "../../partials/StudentSidebar";

function StudentLayout({children}) {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <StudentSidebar/>
                <div className="content">{children}</div>
                
            </div>
        </div>
    );
}

export default StudentLayout;