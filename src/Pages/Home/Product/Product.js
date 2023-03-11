import React from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, price } = product;
  const navigate = useNavigate();

  const inventoryNavigate = (id) => navigate(`/inventory/${id}`);

  return (
    <div
      className="flex flex-col justify-between full max-w-sm bg-white rounded-lg shadow-md"
      style={{ height: "500px" }}
    >
      <div className="flex justify-center">
        <img
          className="p-8 max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          src={image}
          alt=""
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {name || <Skeleton />}
        </h5>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900">
            ${price || <Skeleton />}
          </span>
          <button
            onClick={() => inventoryNavigate(_id)}
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Update Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
