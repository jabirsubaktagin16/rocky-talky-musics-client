import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import AddNewItem from "./Pages/ManageInventory/AddNewItem/AddNewItem";
import ManageInventory from "./Pages/ManageInventory/ManageInventory/ManageInventory";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Pages/SignIn/RequireAuth/RequireAuth";
import SignIn from "./Pages/SignIn/SignIn/SignIn";
import SignUp from "./Pages/SignIn/SignUp/SignUp";
import SupplierDetails from "./Pages/Suppliers/SupplierDetails/SupplierDetails";
import Suppliers from "./Pages/Suppliers/Suppliers/Suppliers";

function App() {
  return (
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
