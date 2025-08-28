import { useEffect, useState } from "react";

export default function useProduct(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => r.json())
      .then((p) => {
        setData(p);
        setLoading(false);
      })
      .catch((e) => {
        setErr(e);
        setLoading(false);
      });
  }, [id]);

  return { data, loading, err };
}
