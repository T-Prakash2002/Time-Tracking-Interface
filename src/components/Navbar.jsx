import React, { useContext } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import { ContextApi } from "../Context/UserCotext";
import "../Style/navbar.css";

const Navbar = () => {
  const { isLoggedIn,logout } = useContext(ContextApi);
  const navigate=useNavigate();
  
  return (
    <>
      <nav className="navbar navbar-expand-md p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-hourglass-split">Time Tracking</i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  <span className="nav-link-text"> Home</span>
                </Link>
              </li>
              {isLoggedIn ? (
                <div className=" d-flex gap-2 px-2">
                  <button
                    className="btn RegisterBtn btn-outline-secondary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Log Out
                    
                  </button>

                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div>Are you sure you want to log out?</div>

                          <div className="d-flex flex-row justify-content-end gap-2 px-2 py-2">
                            <button
                              type="button"
                              className="btn btn-secondary w-25"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Close
                            </button>

                            <button
                              className="btn btn-model RegisterBtn w-25"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              onClick={() => {
                                navigate("/");
                                logout();
                              }}
                            >
                              Log Out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <Link to="/register" className="RegisterBtn btn">
                    Sign Up
                  </Link>
                  <Link to="/login" className="RegisterBtn btn">
                    Log In
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid" id="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
