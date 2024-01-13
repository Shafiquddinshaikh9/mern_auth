import React from "react";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-md-6 p-md-2 d-flex flex-column justify-content-center align-items-center left"
        >
          <div>
            <img
              src="https://boagworld.sirv.com/Images/Blog-Images/homepage-design-qwilr.png?profile=small%20"
              alt="akcbascb"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-md-6 d-flex flex-column justify-content-center align-items-center right"
        >
          <h3>
            <i>Welcome to</i>
          </h3>
          <h3>
            <i>our home page</i>
          </h3>
          <p>we have very inspired technologies</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
