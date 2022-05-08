import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading || sending) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <div className="flex justify-center lg:my-40 xl:my-40 my-64">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Email Verification
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Your Email is Not Verified! Please verify your Email Address.
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={async () => {
              await sendEmailVerification();
              toast("Verificaion Email Sent");
            }}
          >
            Send Verification Email Again
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
