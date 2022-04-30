import React from "react";
import Product from "../Product/Product";
import useProducts from "./../../../hooks/useProducts";

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold text-center">Products</h2>
      <div className="container mx-auto md:px-20 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
