import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import Beer from './components/Beer';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchFavItems, putItemsToFav } from './store/fetch-actions';
import { useDispatch } from 'react-redux';
import FavouriteBeers from './components/FavouriteBeers';

function App() {
  const dispatch = useDispatch();

  const favItems = useSelector(state => state.fav.favItems);

  useEffect(() => {
    dispatch(putItemsToFav(favItems));
  }, [favItems, dispatch]);

  useEffect(() => {
    dispatch(fetchFavItems());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/beer-app">
            <Beers />
          </Route>
          <Route path="/beer-app/beers/:id">
            <Beer />
          </Route>
          <Route path="/beer-app/favourite">
            <FavouriteBeers />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
