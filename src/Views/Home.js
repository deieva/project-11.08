import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div>
            <div className="row py-5 my-5">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="text-center header-wrapper">
                        <div className="header-background p-4">
                            <h1 className="pt-1 mb-5 main-header head-info">Some title</h1>
                            <div className="button-wrapper">
                                <NavLink to="/articles">
                                    <p className="animated-word">Discover!</p>
                                </NavLink>
                            </div>
                            <h2 className="pt-4 mt-1 head-info">Some other title</h2>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            )
}

            export default Home;