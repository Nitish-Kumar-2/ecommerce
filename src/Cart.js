import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./components/FormatPrice";
const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log("🚀 ~ file: Cart.js:6 ~ Cart ~ cart:", cart);

  if (cart.length === 0) {
    return (
      <div className="text-center h-fit w-screen py-80">
        <h3 className="font-bold text-3xl ">No Item in the Cart</h3>
        <NavLink to="/products">
          <button className="bg-blue-400 font-bold text-xl py-3 text-white my-5 px-5">Shop Now</button>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="">
        <div className="md:grid hidden my-4 grid-cols-5 uppercase text-center">
          <p>Item</p>
          <p className="">Price</p>
          <p>Quantity</p>
          <p className="">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr className="md:block hidden"/>
        <div className="">
          {cart.map((currCart) => {
            return <CartItem key={currCart.id} {...currCart} />;
          })}
        </div>
        <hr />
        <div className="mx-20 md:flex md:justify-between my-5">
          <NavLink to="/products">
            <button className="bg-blue-400 text-white font-bold py-3 px-6 text-xl">
              Continue Shopping
            </button>
          </NavLink>
          <button
            className="bg-red-400 text-white font-bold py-3 px-6 text-xl mx-10"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        {/*total price section*/}

        <div className="text-center">
          <div className="md:flex justify-between">
            <div></div>
            <div className="md:w-1/5 bg-gray-100 p-5 m-10">
              <div className="flex justify-between">
                <p className="capitalize text-lg text-gray-500">subTotal:</p>

                <FormatPrice price={total_price} />
              </div>

              <div className="flex justify-between">
                <p className="capitalize text-lg text-gray-500">shipping fee:</p>
                <p>
                  <FormatPrice price={shipping_fee} />
                </p>
              </div>
              <div className="flex justify-between">
                <p className="capitalize text-lg text-gray-500">order total:</p>
                <p>
                  <FormatPrice price={total_price + shipping_fee} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
