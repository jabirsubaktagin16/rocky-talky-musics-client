import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useProducts from "./../../../hooks/useProducts";
import SingleItem from "./../SingleItem/SingleItem";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://protected-lowlands-38507.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <>
      <PageTitle title={"Manage Inventories"} />
      {/* Banner Start */}
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Ks6RQbc/joel-wyncott-ylwijnko5m-U-unsplash-1.jpg')",
          height: "500px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white">
              <h1 className="font-semibold text-6xl mb-4 uppercase">
                Manage Inventories
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className="grid mx-auto lg:px-52 px-6 my-16 gap-8">
        <Link
          to="/addItem"
          type="button"
          className="flex justify-center items-center bg-green-400 text-white hover:bg-green-500 p-2 text-base w-auto focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <MdAddCircleOutline />
          <span className="ml-4">Add New Item</span>
        </Link>
        {products.map((product) => (
          <SingleItem
            product={product}
            key={product._id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ManageInventory;
