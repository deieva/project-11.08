import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div className="md-3 sm-3">
            <h1 className="test-container">
                Welcome to the nature
            </h1>
            <div className="text-center header-wrapper sm-12 md-6 lg-12">
                <div className="sm-3 md-3 p-3">
                    <div className="button-wrapper">
                        <NavLink to="/" className="sm-3 test-container2">
                            <p className="animated-phrase">Join!</p>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;