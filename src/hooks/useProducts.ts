import { useEffect, useState } from "react";
import type { Product } from "../types/Product";

export default function useProducts(){
    const [products, setProduct] = useState<Product[]>([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

  async function fetchProducts() {
    try{
    setLoading(true);
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
        throw new Error("Failed with status: " + res.status);
      }
    const arr = await res.json();
    setProduct(arr);
    setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return {products, message, loading};
}