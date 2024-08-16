import React, { useState,useContext } from "react";
import "../Style/register.css";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../Context/UserCotext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "prakash@gmail.com",
    password: 1234,
  });
    const {login}=useContext(ContextApi)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const ApiRes = await login(formData.email, formData.password);

      if (ApiRes == "Login Successful") {
        alert(ApiRes);
        navigate("/");
      }else{
        alert(ApiRes)
      }

      
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <sup className="back-button">
          <i
            className="bi bi-arrow-left BackArrow"
            onClick={() => {
              navigate(-1);
            }}
          ></i>
        </sup>
        <div className="title">
          <h1 className="text-center">LOG IN</h1>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            minLength={4}
            maxLength={8}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
