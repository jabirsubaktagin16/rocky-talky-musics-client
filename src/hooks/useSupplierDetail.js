import { useEffect, useState } from "react";

const useSupplierDetail = (id) => {
  const [supplier, setSupplier] = useState({});
  useEffect(() => {
    const url = `https://protected-lowlands-38507.herokuapp.com/supplier/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSupplier(data));
  }, [id]);
  return [supplier, setSupplier];
};

export default useSupplierDetail;
