import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div className="test-container">
            <h1>
                Welcome to the nature 
            </h1>
                    <div className="text-center header-wrapper">
                        <div className="sm-1 md-3 p-4">
                            <div className="button-wrapper">
                                <NavLink to="/">
                                    <p className="animated-phrase">Join!</p>
                                </NavLink>
                            </div>
                        </div>
                </div>
            </div>
            )
}

            export default Home;