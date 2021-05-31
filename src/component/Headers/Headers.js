import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  text-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Combination of Fruits
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <Link class="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
              <Link class="nav-link" to="/Orders">
                Orders
              </Link>
              <Link class="nav-link" to="/Admin">
                Admin
              </Link>
              <Link class="nav-link" to="/SingUp">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
