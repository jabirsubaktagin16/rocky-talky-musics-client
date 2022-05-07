import React from "react";
import { useParams } from "react-router-dom";
import useSupplierDetail from "./../../../hooks/useSupplierDetail";

const SupplierDetails = () => {
  const { id } = useParams();
  const [supplier, setSupplier] = useSupplierDetail(id);
  return (
    <>
      {/* Banner Start */}
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${supplier.thumbnailImage})`,
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
                About {supplier.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className="container items-center mx-auto my-8 px-10 lg:px-20 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="flex items-center justify-center">
          <img src={supplier.logoImage} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-medium">Founding Year</h3>
          <p className="font-semibold text-2xl">{supplier.foundingYear}</p>
          <br />
          <h3 className="text-xl font-medium">Products</h3>
          <p className="font-semibold text-2xl">{supplier.products}</p>
          <br />
          <h3 className="text-xl font-medium">Details</h3>
          <p className="font-normal text-lg">{supplier.description}</p>
        </div>
      </div>
    </>
  );
};

export default SupplierDetails;
