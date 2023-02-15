import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { MdAddCircleOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";
import auth from "./../../firebase.init";
import Product from "./../Home/Product/Product";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://rocky-talky-musics-server.onrender.com/inventory?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
        setIsLoading(false);
      } catch (error) {
        toast.error(error?.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/signin");
        }
      }
    };
    getMyItems();
  }, [user]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Header />
      <PageTitle title={"My Items"} />
      {/* Banner Start */}
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/zfP2zrR/elise-coates-tk6-Yu9h-Rz-E-unsplash-1.jpg')",
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
                My Items
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
      <div className="my-16">
        {myItems.length === 0 ? (
          <div className="container mx-auto md:px-20 px-10 flex justify-center items-center">
            <p className="text-xl font-light">
              Looks like you haven't add Any Items.{" "}
              <Link to="/addItem" className="text-purple-600 font-bold">
                Add New Item
              </Link>{" "}
              to add items in your list.
            </p>
          </div>
        ) : (
          <>
            <div className="container mx-auto md:px-20 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              {myItems.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
            <div className="container flex justify-center items-center mx-auto mt-8 lg:px-32 xl:px-32 px-10">
              <Link
                to="/addItem"
                type="button"
                className="flex justify-center items-center px-6 py-2.5 lg:w-2/4 xl:w-2/4 bg-green-500 text-white font-medium text-lg uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                <MdAddCircleOutline />
                <span className="ml-4">Add New Item</span>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyItems;
