import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
const Login = () => {
  // const [data, setData] = useState({});
  const [inpdata, setInpData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInpData({
      ...inpdata,
      [name]: value,
    });
    console.log(inpdata);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpdata),
      });

      const result = await response.json();
      if (!result) {
        return toast.error("FAILED TO LOGIN", { position: "top-center" });
      } else if (result.code === 401) {
        return toast.error("Plz fill details", { position: "top-center" });
      } else if (result.code === 501) {
        return toast.error("server error", { position: "top-center" });
      }
      toast.success("LOGIN SUCCESFULLY", {
        position: "top-center",
        autoClose: 2000,
      });

      const token = result.token;
      // localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("SOMETING WRONG", { position: "top-center" });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col d-flex flex-column justify-content-center align-items-center "
        >
          <h1 className="text-body-tertiary p-1">
            <i>Login</i>
          </h1>
          <div>
            <form
              className="p-5 border mt-2 shadow-sm bg-info-subtle  rounded"
              method="POST"
            >
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={inpdata.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password*
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={inpdata.password}
                  onChange={handleInput}
                />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={handleSubmit}
                >
                  Login
                </motion.button>
                <Link to="/login">
                  <p>Don't have an account?click here for signin</p>
                </Link>
              </div>
            </form>
            <ToastContainer />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
