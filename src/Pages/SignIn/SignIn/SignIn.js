import React, { useEffect, useRef, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "./../../../firebase.init";
import useToken from "./../../../hooks/useToken";
import Loading from "./../../Shared/Loading/Loading";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [
    signInWithEmailAndPassword,
    signInWithEmailAndPasswordUser,
    signInWithEmailAndPasswordLoading,
    signInWithEmailAndPasswordError,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(signInWithEmailAndPasswordUser);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const [signedInUser, userLoading, userError] = useAuthState(auth);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (signedInUser) setIsSignedIn(true);
    else setIsSignedIn(false);
  }, signedInUser);

  if (sending || signInWithEmailAndPasswordLoading || userLoading)
    return <Loading />;

  if (signInWithEmailAndPasswordError) {
    toast.error(signInWithEmailAndPasswordError?.message);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const navigateSignup = (event) => navigate("/signup");

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  return (
    <>
      <PageTitle title={"Sign In"} />
      <Header />
      <section className="h-screen container mx-auto md:px-20 ">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800 ">
            <div className="w-full lg:w-5/12 xl:w-5/12 bg-white px-8 py-20">
              <h1 className="text-4xl uppercase text-center font-bold">
                Sign in Form
              </h1>
              <form onSubmit={handleSubmit} className="mt-10">
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

                <input
                  type="submit"
                  className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  value="Sign In"
                />
              </form>
              {/* {errorElement} */}
              <div className="text-right my-3">
                <button
                  onClick={() => resetPassword()}
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forget Password
                </button>
              </div>

              <div className="flex items-center mb-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <p className="text-center">Sign In Using</p>
              <SocialLogin />
              <div className="flex justify-center mt-2">
                <p>
                  Don't Have an Account?{" "}
                  <button
                    onClick={navigateSignup}
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Create an account
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

export default SignIn;
