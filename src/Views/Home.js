import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div className="test-container">
                    <div className="text-center header-wrapper">
                        <div className="p-4">
                            <h1 className="pt-1 mb-5">Some title</h1>
                            <div className="button-wrapper">
                                <NavLink to="/articles">
                                    <p className="animated-phrase">Discover!</p>
                                </NavLink>
                            </div>
                            <h2 className="pt-4 mt-1 head-info">Some other title</h2>
                        </div>
                </div>
            </div>
            )
}

            export default Home;