import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  // const [data, setData] = useState({});
  const [inpdata, setInpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
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
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpdata),
      });

      const result = await response.json();
      if (!result) {
        return toast.error("FAILED TO SIGNUP", { position: "top-center" });
      }
      if (result.code === 401) {
        return toast.error("Plz fill details", { position: "top-center" });
      }
      if (result.code === 501) {
        return toast.error("server error", { position: "top-center" });
      }
      toast.success("HURRY! SUCCESFULLY SIGNUP", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/login");
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
          <h1 className="text-body-tertiary">
            <i>Signup</i>
          </h1>
          <div>
            <form
              className="p-5 border mt-1 shadow-sm bg-info-subtle rounded"
              method="POST"
            >
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Firstname*
                </label>
                <input
                  type="text"
                  className="form-control input"
                  id="firstName"
                  aria-describedby="emailHelp"
                  name="firstname"
                  value={inpdata.firstname}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label for="lastname" className="form-label">
                  Lastname*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={inpdata.lastname}
                  onChange={handleInput}
                />
              </div>
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
              <div className="mb-3">
                <label for="cpassword" className="form-label">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  value={inpdata.cpassword}
                  onChange={handleInput}
                />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={handleSubmit}
                >
                  Signin
                </button>
                <Link to="/login">
                  <p>already signin?click here for login</p>
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

export default Signup;
