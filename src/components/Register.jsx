import React, { useState,useContext } from "react";
import "../Style/register.css";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../Context/UserCotext";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "Prakash",
    email: "prakash@gmail.com",
    password: "1234",
    confirmPassword: "1234",
  });

  const {register}=useContext(ContextApi)

  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.password!=formData.confirmPassword){
        alert("Password do not Match ")
        return;
    }else{

      const ApiRes=await register(formData.name,formData.email,formData.password);  

      if(ApiRes=="User created successfully"){
        alert(ApiRes);
        navigate("/")
      }else{
        alert(ApiRes)
      }
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
          <h1 className="text-center">Register</h1>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
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

export default Register;
