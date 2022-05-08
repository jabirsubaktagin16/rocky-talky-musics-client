import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "./../../hooks/useProductDetail";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useProductDetail(id);
  const quantityRef = useRef(0);

  let {
    name,
    brand,
    price,
    image,
    quantity,
    sold,
    category,
    email,
    description,
  } = product;

  const handleDelivery = () => {
    if (quantity > 0) {
      quantity = parseInt(product.quantity) - 1;
      sold = parseInt(product.sold) + 1;
      toast.success("Product Delivered Successfully");
    } else {
      quantity = product.quantity;
      sold = product.sold;
      toast("Product is Out of Stock!", {
        icon: "⚠️",
      });
    }
    price = parseInt(price);

    const updatedProduct = {
      name,
      brand,
      price,
      image,
      quantity,
      category,
      sold,
      email,
      description,
    };

    // send data to the server
    const url = `https://protected-lowlands-38507.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(updatedProduct);
      });
  };

  const handleRestock = (event) => {
    event.preventDefault();
    quantity = parseInt(quantityRef.current.value) + parseInt(quantity);
    price = parseInt(price);
    const updatedProduct = {
      name,
      brand,
      price,
      image,
      quantity,
      category,
      sold,
      email,
      description,
    };
    // send data to the server
    const url = `https://protected-lowlands-38507.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(updatedProduct);
        toast.success("Products Restocked Successfully");
        quantityRef.current.value = "";
      });
  };

  return (
    <div className="my-16">
      <div className="container items-center mx-auto md:px-20 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        <div>
          <div className="bg-gray-200 rounded px-4">
            <img className="" src={product.image} alt="" />
          </div>
        </div>
        <div>
          <div className="p-6 flex flex-col justify-start">
            <h1 className="text-gray-900 text-4xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-gray-700 text-base mb-4">
              {product.description}
            </p>
            <Link
              type="button"
              to="/manageInventory"
              className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs text-center leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Manage Inventories
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-purple-700 text-white p-8">
            <h5 className="text-2xl text-center font-semibold">
              Products Details
            </h5>
            <div className="my-4 text-center">
              <p className="font-normal">Category</p>
              <h6 className="text-xl font-medium">{product.category}</h6>
              <br />
              <p className="font-normal">Brand</p>
              <h6 className="text-xl font-medium">{product.brand}</h6>
              <br />
              <p className="font-normal">Supplier Email</p>
              <h6 className="text-xl font-medium">{product.email}</h6>
              <br />
              <p className="font-normal">Unit Price</p>
              <h6 className="text-xl font-medium">${product.price}</h6>
              <br />
              <p className="font-normal">Available in The Stock</p>
              <h6 className="text-xl font-medium">
                {product.quantity > 0 ? product.quantity : "Out of Stock"}
              </h6>
              <br />
              <p className="font-normal">Total Sold Unit</p>
              <h6 className="text-xl font-medium">{product.sold}</h6>
              <br />
              <button
                onClick={handleDelivery}
                type="button"
                className="w-full inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-normal uppercase hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Delivery
              </button>
              <form onSubmit={handleRestock} className="mt-8">
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                      <input
                        ref={quantityRef}
                        type="number"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-transparent bg-clip-padding border border-solid border-white transition ease-in-out m-0 focus:text-slate-50 focus:bg-transparent  focus:outline-none"
                        placeholder="Enter Amount to Restock"
                        aria-label="Search"
                        aria-describedby="button-addon3"
                      />
                      <input
                        type="submit"
                        value="Restock"
                        className="btn inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto md:px-20 px-10 grid overflow-hidden grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-rows-none gap-8">
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
            <Link
              type="button"
              to="/manageInventory"
              className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs text-center leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Manage Inventories
            </Link>
          </div>
        </div>
        <div className="bg-purple-700 text-white p-8">
          <h5 className="text-2xl text-center font-semibold">
            Products Details
          </h5>
          <div className="my-4 text-center">
            <p className="font-normal">Category</p>
            <h6 className="text-xl font-medium">{product.category}</h6>
            <br />
            <p className="font-normal">Supplier Email</p>
            <h6 className="text-xl font-medium">{product.email}</h6>
            <br />
            <p className="font-normal">Unit Price</p>
            <h6 className="text-xl font-medium">${product.price}</h6>
            <br />
            <p className="font-normal">Available in The Stock</p>
            <h6 className="text-xl font-medium">
              {product.quantity > 0 ? product.quantity : "Out of Stock"}
            </h6>
            <br />
            <p className="font-normal">Total Sold Unit</p>
            <h6 className="text-xl font-medium">{product.sold}</h6>
            <br />
            <button
              onClick={handleDelivery}
              type="button"
              className="w-full inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-normal uppercase hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Delivery
            </button>
            <form onSubmit={handleRestock} className="mt-8">
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <input
                      ref={quantityRef}
                      type="number"
                      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-transparent bg-clip-padding border border-solid border-white transition ease-in-out m-0 focus:text-slate-50 focus:bg-transparent  focus:outline-none"
                      placeholder="Enter Amount to Restock"
                      aria-label="Search"
                      aria-describedby="button-addon3"
                    />
                    <input
                      type="submit"
                      value="Restock"
                      className="btn inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Inventory;
