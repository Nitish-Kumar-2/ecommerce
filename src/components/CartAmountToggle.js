import { Minus, Plus } from "lucide-react";
import React from "react";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="">
      <div className="flex gap-6 my-3">
        <button onClick={() => setDecrease()}>
        <Minus />
        </button>
        <div className="text-xl">{amount}</div>
        <button onClick={() => setIncrease()}>
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;