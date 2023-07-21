import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { Check } from "lucide-react";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      <div className="colors">
        <p className="">
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={
                  color === curColor
                    ? "rounded-full opacity-60 mx-2"
                    : "rounded-full mx-2"
                }
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? (
                  <Check color="white" className="" />
                ) : (
                  <p className="rounded-full py-3 text-center px-3"></p>
                )}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <button className="bg-blue-400 text-white font-bold py-3 px-5">
          Add To Cart
        </button>
      </NavLink>
    </div>
  );
};
export default AddToCart;
