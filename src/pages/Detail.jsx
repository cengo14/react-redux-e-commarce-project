import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/actions";
import DetailComp from "../components/detail/DetailComp";
import Loader from "../components/loader/Loader";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (store) => store.products
  );
  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
