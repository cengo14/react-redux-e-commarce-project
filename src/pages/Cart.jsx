import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleartCart, getCartTotal } from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, itemCount, totalAmount } = useSelector((store) => store.cart);
  console.log(carts, itemCount, totalAmount);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          <div className="border-b-4 flex justify-between items-center my-10 ps-10 pb-5">
            <h2 className="text-3xl font-semibold  ">Shopping Cart</h2>
            <div className="flex gap-5">
              <p className="bg-gray-200 py-2 px-5 rounded-lg font-semibold text-xl">
                Total Price:{" "}
                <span className="font-bold text-2xl">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>
              <button
                onClick={() => dispatch(cleartCart())}
                className="bg-red-200 text-lg font-bold py-2 px-4 rounded-md hover:bg-red-300"
              >
                Checkout
              </button>
            </div>
          </div>
          {carts?.map((cart) => (
            <CartComp cart={cart} key={cart.id} />
          ))}
        </div>
      ) : (
        <p className="text-center h-screen mt-48 text-3xl font-semibold">
          There are no items in your cart
        </p>
      )}
    </div>
  );
};

export default Cart;
