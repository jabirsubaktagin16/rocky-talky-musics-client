import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://rocky-talky-musics-server.onrender.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return [product, setProduct];
};

export default useProductDetail;
