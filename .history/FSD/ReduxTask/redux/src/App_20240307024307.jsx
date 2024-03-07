// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CartPage from './CartPage';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart</h1>
        <CartPage />
      </div>
    </Provider>
  );
};

export default App;
