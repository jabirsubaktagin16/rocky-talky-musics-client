import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";

const SingleItem = ({ product }) => {
  const [products, setProducts] = useProducts();
  const { _id, name, image, price, quantity } = product;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      });
  };

  const inventoryNavigate = (id) => navigate(`/inventory/${id}`);

  const inventoryEdit = (id) => navigate(`/inventoryEdit/${id}`);

  return (
    <div className="grid overflow-hidden grid-cols-6 grid-rows-none gap-2 shadow-md items-center p-4">
      <div>
        <img className="md:w-4/6 w-full" src={image} alt="" />
      </div>
      <div className="box col-start-2 col-end-6">
        <button
          onClick={() => inventoryNavigate(_id)}
          className="text-gray-900 text-xl font-semibold mb-2"
        >
          {name}
        </button>
        <p className="text-gray-700 text-base font-medium mb-4">${price}</p>
        {quantity === 0 && (
          <p className="text-gray-700 text-base mb-2 text-red-700">
            Out of Stock
          </p>
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
          onClick={() => inventoryEdit(_id)}
          className="text-4xl  text-green-500 hover:text-green-600"
        >
          <MdEdit />
        </button>
        <button
          className="text-4xl  text-red-500 hover:text-red-600"
          data-bs-toggle="modal"
          data-bs-target="#deleteModalCenter"
        >
          <MdDelete />
        </button>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="deleteModalCenter"
        tabindex="-1"
        aria-labelledby="deleteModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Delete Confirmation
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <p>
                Do you really want to delete <strong>{name}</strong>?
              </p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(_id)}
                type="button"
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
