import { useEffect, useState } from "react";

const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://rocky-talky-musics-server.onrender.com/suppliers")
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);

  return [suppliers, setSuppliers];
};

export default useSuppliers;
