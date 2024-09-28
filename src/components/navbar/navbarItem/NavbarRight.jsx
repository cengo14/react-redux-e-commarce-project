import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);
  return (
    <nav className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-zinc-200 ">
        <input
          className="bg-zinc-200 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search..."
        />
        <BiSearch size={28} cursor={"pointer"} />
      </div>
      <AiOutlineHeart
        className="hover:text-red-500"
        size={28}
        cursor={"pointer"}
      />
      <div
        onClick={() => navigate("/cart")}
        className="relative cursor-pointer"
      >
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full size-5 flex items-center justify-center">
          {carts ? carts.length : "0"}
        </div>
        <SlBasket size={28} />
      </div>
    </nav>
  );
};

export default NavbarRight;
