import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
      <Router >
          <Header />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
