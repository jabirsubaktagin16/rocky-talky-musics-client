import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import useProducts from "./../../../hooks/useProducts";

const Products = () => {
  const [products, setProducts, isLoading] = useProducts();
  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold text-center">Products</h2>
      <div className="container mx-auto md:px-20 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} isLoading={isLoading} />
        ))}
      </div>
      <div className="flex justify-center mx-auto md:px-20 px-10 mt-8">
        <Link
          type="button"
          to="/manageInventory"
          className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Products;
