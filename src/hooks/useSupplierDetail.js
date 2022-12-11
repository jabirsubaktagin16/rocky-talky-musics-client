import { useEffect, useState } from "react";

const useSupplierDetail = (id) => {
  const [supplier, setSupplier] = useState({});
  useEffect(() => {
    const url = `https://rocky-talky-musics-server.onrender.com/supplier/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSupplier(data));
  }, [id]);
  return [supplier, setSupplier];
};

export default useSupplierDetail;
