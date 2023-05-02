import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="container">
                <Navbar isEntrance={true}/>
                <div className="content">{children}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;
