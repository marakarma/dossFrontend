import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import ProductSingle from './ProductSingle/ProductSingle';
import Category from './Category';
import { Cart } from './Cart';
import { Wishlist } from './Wishlist';

function App() {
  return (
      <Router>
          <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/product-single">
            <ProductSingle />
          </Route>

          <Route path="/category">
            <Category />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
