import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route exact path="/">
            {/* Add your home page component here if needed */}
            {/* For example: <HomePage /> */}
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          {/* Add more routes for other pages if needed */}
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
