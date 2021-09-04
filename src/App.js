import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Page404 from './Views/Page404';

function App() {
  return (
      <Router >
          <Header />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

              <Route path="/page404">
                  <Page404 />
              </Route>

          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
