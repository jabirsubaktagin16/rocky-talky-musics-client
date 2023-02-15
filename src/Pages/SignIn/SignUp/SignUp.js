import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import auth from "./../../../firebase.init";
import useToken from "./../../../hooks/useToken";
import Loading from "./../../Shared/Loading/Loading";
import SocialLogin from "./../SocialLogin/SocialLogin";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const token = useToken(user);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast("Updated Profile");
    } else {
      toast.error("Password Doesn't Match");
    }
  };

  const navigateLogin = (event) => navigate("/signin");

  if (loading || updating) return <Loading />;

  if (token) navigate("/");

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <section className="h-screen container mx-auto lg:px-20 md:mb-20">
        <PageTitle title={"Sign Up"} />
        <div className="container h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800 ">
            <div className="w-full lg:w-5/12 bg-white px-8 py-20">
              <h1 className="text-4xl uppercase text-center font-bold">
                Sign Up Form
              </h1>
              <form onSubmit={handleRegister} className="mt-10">
                <div className="mb-6">
                  <input
                    type="text"
                    ref={nameRef}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    ref={emailRef}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    ref={passwordRef}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    ref={confirmPasswordRef}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Confirm Password"
                  />
                </div>

                <input
                  type="submit"
                  className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  value="Sign Up"
                />
              </form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <p className="text-center">Sign Up Using</p>
              <SocialLogin />
              <div className="flex justify-center mt-2">
                <p>
                  Already Have an Account?{" "}
                  <button
                    onClick={navigateLogin}
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
