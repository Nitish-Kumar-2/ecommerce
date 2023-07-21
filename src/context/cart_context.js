import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cart_reducer";
import { useEffect } from "react";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("nitishCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_amount: 0,    
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // increment and decrement
  const setDecrease = (id) => {
    dispatch({ type: "SET_DEREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  //clear cart logic
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  //to add data to the local storage
  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("nitishCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
