import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import AddNewItem from "./Pages/ManageInventory/AddNewItem/AddNewItem";
import ManageInventory from "./Pages/ManageInventory/ManageInventory/ManageInventory";
import MyItems from "./Pages/MyItems/MyItems";
import Loading from "./Pages/Shared/Loading/Loading";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Pages/SignIn/RequireAuth/RequireAuth";
import SignIn from "./Pages/SignIn/SignIn/SignIn";
import SignUp from "./Pages/SignIn/SignUp/SignUp";
import SupplierDetails from "./Pages/Suppliers/SupplierDetails/SupplierDetails";
import Suppliers from "./Pages/Suppliers/Suppliers/Suppliers";

function App() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setCompleted(true);
      }, 2000);
    }, 250);
  }, []);
  return (
    <>
      {!completed ? (
        <>{loading && <Loading />}</>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/supplier/:id" element={<SupplierDetails />} />
            <Route
              path="/inventory/:id"
              element={
                <RequireAuth>
                  <Inventory />
                </RequireAuth>
              }
            />
            <Route
              path="/manageInventory"
              element={
                <RequireAuth>
                  <ManageInventory />
                </RequireAuth>
              }
            />
            <Route
              path="/addItem"
              element={
                <RequireAuth>
                  <AddNewItem />
                </RequireAuth>
              }
            />
            <Route
              path="/myItems"
              element={
                <RequireAuth>
                  <MyItems />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default App;
