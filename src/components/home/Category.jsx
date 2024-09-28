import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../redux/actions";

const Category = ({ setCategory }) => {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
      <div className="border-b pb-1 px-2 text-xl max-md:text-base font-bold">
        Categories
      </div>
      <div
        onClick={() => dispatch(getProducts())}
        className="text-lg max-md:text-sm cursor-pointer hover:bg-gray-200 p-2"
      >
        All Categories
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg max-md:text-sm capitalize cursor-pointer hover:bg-gray-200 p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
