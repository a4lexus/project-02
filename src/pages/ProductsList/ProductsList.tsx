import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

export default function ProductsList() {
  const {products,message,loading} = useProducts();

  if (loading){
    return <p>Loading...</p>
  }
  if (message) {
    return <p>{message}</p>
  }

  return (
    <div>
      ProductsList
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} <br />
            <img src={p.images[0]} alt={p.title} width={"200px"} /> <br />
            <Link to={`/products/${p.id}`}>To product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
