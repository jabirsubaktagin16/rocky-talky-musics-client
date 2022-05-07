import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../../firebase.init";

const AddNewItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const url = `https://protected-lowlands-38507.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Item added Successfully");
        event.target.reset();
      });
  };

  return (
    <section className="h-screen container mx-auto md:px-20 md:mb-20">
      <div className="container h-full">
        <div className="flex justify-center items-center flex-wrap h-full text-gray-800 ">
          <div className="w-full md:w-5/12 bg-white px-8 py-20">
            <h1 className="text-4xl uppercase text-center font-bold">
              Add New Item
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Product Name"
                  {...register("name")}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Price"
                  {...register("price")}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Image URL"
                  {...register("image")}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Quantity"
                  {...register("quantity")}
                  required
                />
              </div>
              <div className="mb-6">
                <select
                  className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5 text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  {...register("category")}
                  required
                >
                  <option defaultValue={""}>Select Category</option>
                  <option value="Accoustic Guitar">Accoustic Guitar</option>
                  <option value="Bass Guitar">Bass Guitar</option>
                  <option value="Drums">Drums</option>
                  <option value="Flute">Flute</option>
                  <option value="Microphone">Microphone</option>
                  <option value="Violin">Violin</option>
                  <option value="Trumpet">Trumpet</option>
                </select>
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Sold"
                  {...register("sold")}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  {...register("email")}
                  readOnly
                  value={user.email}
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="form-control block w-full h-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
                  placeholder="Product Description"
                  {...register("description")}
                  required
                />
              </div>
              <input
                type="submit"
                className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewItem;
