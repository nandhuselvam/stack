// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CartPage from './CartPage';
import CartItem from './CartItem';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart</h1>
        <CartPage />
        <CartItem />
        <Ca
      </div>
    </Provider>
  );
};

export default App;
