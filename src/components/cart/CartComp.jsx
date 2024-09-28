import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slice/cartSlice";

const CartComp = ({ cart }) => {
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200 py-5 shadow-black shadow-sm">
      <div className="w-4/5 h-[100px] mx-auto flex justify-between  items-center gap-20">
        <img
          className="w-20 object-cover rounded-2xl"
          src={cart.image}
          alt="image"
        />

        <p className="font-semibold w-[176px]">
          {cart.title.slice(0, 20) + "..."}
        </p>

        <div className="text-xl font-bold bg-gray-100 p-2 rounded-full ">
          {cart.quantity}
        </div>
        <p className="text-2xl font-bold w-[80px]">${cart.price}</p>
        <button
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-red-200 py-2 px-4 rounded-md hover:bg-red-300"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartComp;
