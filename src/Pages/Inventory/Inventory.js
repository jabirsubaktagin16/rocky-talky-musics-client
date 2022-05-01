import React from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "./../../hooks/useProductDetail";

const Inventory = () => {
  const { id } = useParams();
  const [product] = useProductDetail(id);
  return (
    <div className="my-16">
      <div className="container mx-auto md:px-20 px-10 grid overflow-hidden grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-rows-none gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 col-start-1 col-end-3 gap-2 items-center">
          <div className="bg-gray-200 rounded px-4">
            <img className="" src={product.image} alt="" />
          </div>
          <div className="p-6 flex flex-col justify-start">
            <h1 className="text-gray-900 text-4xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-gray-700 text-base mb-4">
              {product.description}
            </p>
          </div>
        </div>
        <div className="bg-purple-700 text-white p-8">
          <h5 className="text-2xl text-center font-semibold">
            Products Details
          </h5>
          <div className="my-4 text-center">
            <p className="font-normal">ID</p>
            <h6 className="text-xl font-medium">{product._id}</h6>
            <br />
            <p className="font-normal">Name</p>
            <h6 className="text-xl font-medium">{product.name}</h6>
            <br />
            <p className="font-normal">Category</p>
            <h6 className="text-xl font-medium">{product.category}</h6>
            <br />
            <p className="font-normal">Supplier Email</p>
            <h6 className="text-xl font-medium">{product.supplier_email}</h6>
            <br />
            <p className="font-normal">Unit Price</p>
            <h6 className="text-xl font-medium">${product.price}</h6>
            <br />
            <p className="font-normal">Available in The Stock</p>
            <h6 className="text-xl font-medium">{product.quantity}</h6>
            <br />
            <p className="font-normal">Total Sold Unit</p>
            <h6 className="text-xl font-medium">Sold Unit</h6>
            <br />
            <button
              type="button"
              className="w-full inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-normal uppercase hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
