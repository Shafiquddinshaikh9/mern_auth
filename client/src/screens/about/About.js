import React, { useEffect, useState } from "react";
import "./about.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
const About = () => {
  const [userData, setUserData] = useState();

  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      console.log(res.data);
      if (data) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // const token = localStorage.getItem("token");

    callAboutPage();
  }, [userData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {userData ? (
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{}</li>
                <li class="list-group-item">{}</li>
                <li class="list-group-item">{}</li>
              </ul>
              <div class="card-body">
                <Link href="#" class="card-link">
                  Card link
                </Link>
                <Link href="#" class="card-link">
                  Another link
                </Link>
              </div>
            </div>
          ) : (
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Guest</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
              <div class="card-body">
                <Link href="#" class="card-link">
                  Card link
                </Link>
                <Link href="#" class="card-link">
                  Another link
                </Link>
              </div>
            </div>
          )}

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default About;
