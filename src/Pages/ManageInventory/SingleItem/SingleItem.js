import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const SingleItem = (props) => {
  const { product, handleDelete } = props;
  const { _id, name, image, price, quantity } = product;
  const navigate = useNavigate();

  const inventoryNavigate = (id) => navigate(`/inventory/${id}`);

  return (
    <div className="grid overflow-hidden grid-cols-6 grid-rows-none gap-2 shadow-md items-center p-4">
      <div>
        <img className="md:w-4/6 w-full" src={image} alt="" />
      </div>
      <div className="box col-start-2 col-end-6">
        <h3 className="text-gray-900 text-3xl text-left font-semibold mb-2">
          {name}
        </h3>
        <p className="text-gray-700 text-base font-medium mb-4">${price||<Skeleton/>}</p>
        {quantity === 0 && (
          <p className="text-base mb-2 text-red-700">Out of Stock</p>
        )}
        {quantity === 1 && (
          <p className="text-gray-700 text-base mb-2">
            1 Item Left in the Stock
          </p>
        )}
        {quantity > 1 && (
          <p className="text-gray-700 text-base mb-2">
            {quantity} Items Left in the Stock
          </p>
        )}
      </div>
      <div className="flex flex-col text-right md:pl-28 gap-6">
        <button
          onClick={() => inventoryNavigate(_id)}
          className="text-4xl  text-green-500 hover:text-green-600"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="text-4xl  text-red-500 hover:text-red-600"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
