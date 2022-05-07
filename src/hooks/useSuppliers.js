import { useEffect, useState } from "react";

const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://protected-lowlands-38507.herokuapp.com/suppliers")
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);

  return [suppliers, setSuppliers];
};

export default useSuppliers;
