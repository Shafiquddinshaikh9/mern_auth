import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const [checktoken, setcheckToken] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setcheckToken(token);
  }, []);

  const loginCheck = () => {
    if (!checktoken) {
      toast.warn("Please login first header", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };
  const logout = () => {
    localStorage.clear();
  };
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ps-2">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  onClick={loginCheck}
                >
                  About
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>

              {checktoken ? (
                <li className="nav-item me-1">
                  <Link to="/login" onClick={logout}>
                    <button className="btn btn-warning me-1">Logout</button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item me-1">
                  <Link to="/login">
                    <button className="btn btn-primary me-1">Login</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <ToastContainer />
      </nav>
    </header>
  );
};

export default Header;
