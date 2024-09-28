import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    if (quantity < productDetail.rating?.count) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        price: productDetail.price,
        image: productDetail?.image,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="mt-10 gap-5 grid grid-cols-2 max-md:grid-cols-1 max-md:pb-10">
      <img
        className="max-size-[500px] max-md:size-[300px] mx-auto"
        src={productDetail.image}
        alt=""
      />
      <div className="flex flex-col justify-center  gap-2">
        <h1 className="text-4xl font-semibold mb-10">{productDetail.title}</h1>
        <div className="flex justify-between">
          <p className="text-lg ">
            Price:{" "}
            <span className="font-bold text-2xl">{productDetail.price}$</span>
          </p>
          <p className="text-lg">
            Rating:{" "}
            <span className="font-bold">{productDetail.rating?.rate}</span>
          </p>
        </div>
        <hr />
        <p className="bg-gray-100 py-5 px-2  rounded-md font-bold">
          Product Detail:{" "}
          <span className="text-gray-600 font-light text-lg">
            {productDetail.description}
          </span>
        </p>
        <div>
          Category:{" "}
          <button className=" font-semibold">{productDetail.category}</button>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={decrement}
            className="text-3xl bg-red-300 px-2 rounded-lg cursor-pointer"
          >
            -
          </div>
          <input
            type="text"
            value={quantity}
            className="w-[10%] text-center text-xl"
          />
          <div
            onClick={increment}
            className="text-3xl bg-green-300 px-2 rounded-lg cursor-pointer"
          >
            +
          </div>
        </div>
        <button
          onClick={addBasket}
          className="w-[102px] flex gap-2 bg-red-400 py-2 px-4 rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-red-500 transition-all"
        >
          Buy
          <SlBasket size={28} />
        </button>
      </div>
    </div>
  );
};

export default DetailComp;
