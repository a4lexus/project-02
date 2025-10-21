import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>We looked everywhere.</h2>
      <p>
        Looks like this page is missing. If you still need help, visit our help
        pages.
      </p>
    <Link to="/"> Go to home page</Link>
    </div>
  );
}
