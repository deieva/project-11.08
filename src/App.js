import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router >
          <ScrollToTop/>
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
