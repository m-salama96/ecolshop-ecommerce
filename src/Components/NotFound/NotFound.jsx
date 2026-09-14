import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="container text-center">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-dark">
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;