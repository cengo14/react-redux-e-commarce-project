import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/actions";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({ category, sort }) => {
  const { products, productStatus } = useSelector((store) => store.products);
  console.log(sort);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    }
    dispatch(getProducts());
  }, [dispatch, category]);
  return (
    <div className="w-5/6">
      {productStatus === "LOADING" ? (
        <div className="w-full p-24 md:px-[360px]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap">
            {currentItems
              ?.sort((a, b) =>
                sort === "inc"
                  ? a.price - b.price
                  : sort === "dec"
                  ? b.price - a.price
                  : null
              )
              ?.map((product, i) => (
                <Product key={i} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
