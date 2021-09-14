import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div className="test-container md-3 sm-3">
            <h1>
                Welcome to the nature 
            </h1>
                    <div className="text-center header-wrapper">
                        <div className="p-4">
                            <div className="button-wrapper">
                                <NavLink to="/articles">
                                    <p className="animated-phrase">Join!</p>
                                </NavLink>
                            </div>
                        </div>
                </div>
            </div>
            )
}

            export default Home;