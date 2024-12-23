import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);


  };


  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);

  const criteria = [
    { label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
    { label: "Contains a number", test: (pwd) => /\d/.test(pwd) },
    { label: "Contains an uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
    { label: "Contains a special character", test: (pwd) => /[@$!%*?&#]/.test(pwd) },
  ];

  const validatePassword = (pwd) => {
    setPassword(pwd);

    // Calculate progress based on matched criteria
    const matchedCriteria = criteria.filter((c) => c.test(pwd)).length;
    const progressPercentage = (matchedCriteria / criteria.length) * 100;
    setProgress(progressPercentage);
  };
  return (

    <main>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="  col-lg-5 ">
            <div class="  mb-3">
              <div class="card text-center px-5 py-5">

                <div class="card-body">
                  <h5 class="card-title fw-bolder fs-1">Sign in</h5>
                  <p class="card-text">Don't have an account?
                    <Link to="/authentication/sign-up" className="ms-1 text-decoration-none">Click here to sign up</Link>
                    {/* <Link to="/authentication/sign-up" className="ms-1 text-decoration-none">Click here to sign up</Link> */}

                  </p>
                  <div class="bd-example">


                    <div class="form-floating mb-3">

                      <input type="email" class="form-control form-control-lg" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="input-group">
                      <div class="form-floating flex-grow-1">
                        <input
                          type={showPassword ? "text" : "password"}

                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                      </div>
                      <button
                        onClick={togglePasswordVisibility}

                        class="btn btn-secondary"
                        type="button"
                        id="togglePassword">
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                      </button>
                    </div>
                    <div class="form-floating mt-3">

                      <input type="email" class="form-control form-control-lg" id="floatingInput" placeholder="Enter your password"


                        value={password}
                        onChange={(e) => validatePassword(e.target.value)}
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="progress">
                        <div
                          className={`progress-bar ${progress === 100 ? "bg-success" : "bg-warning"
                            }`}
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {progress.toFixed(0)}%
                        </div>
                      </div>
                    </div>

                    {/* Validation Criteria */}
                    {/* <ul className="list-group mt-3">
                      {criteria.map((criterion, index) => (
                        <li
                          key={index}
                          className={`list-group-item d-flex justify-content-between align-items-center ${criterion.test(password) ? "text-success" : "text-danger"
                            }`}
                        >
                          {criterion.label}
                          {criterion.test(password) ? (
                            <i className="bi bi-check-circle-fill"></i>
                          ) : (
                            <i className="bi bi-x-circle-fill"></i>
                          )}
                        </li>
                      ))}
                    </ul> */}

                    <div class="d-flex mb-3 mt-3">
                      <div class="form-check">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>


                      <div class="flex-fill flex-align-right-top">Forgot password?</div>
                    </div>


                  </div>
                  <div class="d-grid gap-2 col-lg-12 btn-group-lg  mx-auto">
                    <button class="btn btn-primary" type="button">Login</button>
                  </div>
                  <label class="m-3 ">
                    <span class="opacity-50">©2024</span>
                    <span>
                      <Link to="/authentication/sign-up" className="ms-1 text-decoration-none "> Webestica.</Link>
                    </span>
                    <span class="opacity-50 ms-1">
                      All rights reserved
                    </span>

                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
