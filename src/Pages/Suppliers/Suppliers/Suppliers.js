import React from "react";
import Supplier from "../Supplier/Supplier";
import useSuppliers from "./../../../hooks/useSuppliers";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useSuppliers();
  return (
    <>
      {/* Banner Start */}
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/L9qT4vc/john-matychuk-g-UK3l-A3-K7-Yo-unsplash-1.jpg')",
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
                About Suppliers
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
      <div className="container my-16 mx-auto lg:px-32 px-10 grid md:grid-cols-3 gap-6 text-center">
        {suppliers.map((supplier) => (
          <Supplier supplier={supplier} key={supplier._id} />
        ))}
      </div>
    </>
  );
};

export default Suppliers;
