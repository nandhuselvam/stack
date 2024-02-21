
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const addItemToCart = (item) => {
//     // Check if item already exists in the cart
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       // If item exists, update its quantity
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       // If item does not exist, add it to the cart
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeItemFromCart = (itemId) => {
//     setCartItems(cartItems.filter((item) => item.id !== itemId));
//   };

//   const increaseQuantity = (itemId) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === itemId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // Update total quantity and amount whenever cartItems change
//   useEffect(() => {
//     const newTotalQuantity = cartItems.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//     const newTotalAmount = cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     setTotalQuantity(newTotalQuantity);
//     setTotalAmount(newTotalAmount);
//   }, [cartItems]);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         totalQuantity,
//         totalAmount,
//         addItemToCart,
//         removeItemFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
