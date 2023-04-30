import Navbar from "../../partials/Navbar";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
