import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `https://rocky-talky-musics-server.onrender.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [id]);
  return [product, setProduct, isLoading];
};

export default useProductDetail;
