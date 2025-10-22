import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/Product";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  async function fetchProductById(id: string) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchProductById(id || "");
  }, [id]);

  return (
    <div>
      ProductPage
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
}
