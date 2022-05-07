import React from "react";
import { useNavigate } from "react-router-dom";

const Supplier = ({ supplier }) => {
  const { _id, name, thumbnailImage, logoImage, description } = supplier;
  const navigate = useNavigate();

  const supplierNavigate = (id) => navigate(`/supplier/${id}`);
  return (
    <div>
      <div className="block rounded-lg shadow-lg bg-white">
        <div
          className="overflow-hidden rounded-t-lg h-28"
          style={{ backgroundImage: `url(${thumbnailImage})` }}
        ></div>
        <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
          <img src={logoImage} alt="" />
        </div>
        <div className="p-6">
          <h4 className="text-2xl font-semibold mb-4">{name}</h4>
          <hr />
          <p className="mt-4">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {description.slice(0, 100)}
          </p>
          <div className="mt-8 flex space-x-2 justify-center">
            <div>
              <button
                onClick={() => supplierNavigate(_id)}
                type="button"
                className="px-6 pt-2.5 pb-2 bg-purple-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
