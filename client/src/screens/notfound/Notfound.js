import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-1">
      <div>
        <h1>
          <i>404</i>
        </h1>
        <h2>Page Not Found</h2>
        <Link to="/">
          <button className="btn btn-primary">refresh</button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
