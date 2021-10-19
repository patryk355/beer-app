import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import Beer from './components/Beer';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Beers />
          </Route>
          <Route path="/beers/:id">
            <Beer />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
