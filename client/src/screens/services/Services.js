import React from "react";
import "./services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-md-6 d-flex flex-column justify-content-center align-items-center right"
        >
          <h3>
            <i>Services</i>
          </h3>
          <h3>
            <i>our home page</i>
          </h3>
          <p>we have very inspired technologies</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-md-6 p-md-2 d-flex flex-column justify-content-center align-items-center left"
        >
          <div>
            <img
              className="rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskMBKj6h5INTfG5X7ITUlI9gByS2BgSGlweth7nYse5N9DQagrCMoNW6BWONntAqehcs&usqp=CAU"
              alt="akcbascb"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
