import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  return (
    <section className="h-screen container mx-auto md:px-20 ">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full text-gray-800 ">
          <div className="w-full md:w-5/12 bg-white px-8 py-20">
            <h1 className="text-4xl uppercase text-center font-bold">
              Sign in Form
            </h1>
            <form className="mt-10">
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <p>Sign In Using</p>
              <SocialLogin />
            </form>
            <div className="flex justify-center mt-2">
              <p>
                Don't Have an Account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
