import React, { useEffect, useState } from "react";
import "./about.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  const [checktoken, setcheckToken] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          About
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default About;
