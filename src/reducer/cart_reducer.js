const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log("🚀 ~ file: cartReducer.js:5 ~ cartReducer ~ product:", product)
  
      //Handle the existing product
      let exitingProduct = state.cart.find(
        (currItem) => currItem.id === id + color
      );
      if (exitingProduct) {
        let updatedProduct = state.cart.map((currItem) => {
          if (currItem.id === id + color) {
            let newAmount = currItem.amount + amount;
            if (newAmount >= currItem.max) {
              newAmount = currItem.max;
            }
            return {
              ...currItem,
              amount: newAmount,
            };
          } else {
            return currItem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      }
  
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    if (action.type === "SET_DEREMENT") {
      let updatedProduct = state.cart.map((currItem) => {
        if (currItem.id === action.payload) {
          let decAmount = currItem.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...currItem,
            amount: decAmount,
          };
        } else {
          return currItem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    }
    if (action.type === "SET_INCREMENT") {
      let updatedProduct = state.cart.map((currItem) => {
        if (currItem.id === action.payload) {
          let incAmount = currItem.amount + 1;
          if (incAmount >= currItem.max) {
            incAmount = currItem.max;
          }
          return {
            ...currItem,
            amount: incAmount,
          };
        } else {
          return currItem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (currItem) => currItem.id !== action.payload
      );
  
      return {
        ...state,
        cart: updatedCart,
      };
    }
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cart: [],
      };
    }
  
    if (action.type === "CART_TOTAL_ITEM") {
      let updateItemValue = state.cart.reduce((initialValue, currItem) => {
        let { amount } = currItem;
        initialValue = initialValue + amount;
        return initialValue;
      }, 0);
      return {
        ...state,
        total_item: updateItemValue,
      };
    }
    if(action.type === "CART_TOTAL_PRICE")
    {
      let total_price = state.cart.reduce((initialValue,currItem)=>{
        let {price,amount} = currItem;
        initialValue = initialValue + (price*amount);
        return initialValue;
      },0); 
      return {
        ...state,
        total_price,
      }
    }
    return state;
  };
  
  export default cartReducer;
  