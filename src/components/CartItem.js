import FormatPrice from "./FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cart_context";
import { Trash2 } from "lucide-react";

const CartItem = ({ id, color, name, amount, price, image }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 capitalize md:my-8">
      <div className="md:flex gap-5 text-center">
        <img src={image} className="md:w-20" alt={id} />
        <div className="my-auto">
          <p>{name}</p>
          <div className="md:flex hidden gap-3">
            <p>color:</p>
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="md:inline-block hidden my-auto text-center">
        <FormatPrice price={price} />
      </div>

      {/*Quanitity*/}
      <div className="md:mx-auto m-auto">
      <CartAmountToggle
      amount={amount}
      setDecrease={() => setDecrease(id)}
      setIncrease={() => setIncrease(id)}
      />
      </div>
      {/*Subtotal*/}
      <div className="md:inline-block hidden my-auto text-center ">
        <FormatPrice price={price * amount} />
      </div>

      <div className="cursor-pointer md:m-0 m-auto">
        <Trash2
          strokeWidth={2.25}
          color="#ff5c5c"
          className="md:m-auto "
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
