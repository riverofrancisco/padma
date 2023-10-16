import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { isAuth } from "../../../middlewares/login/auth";


const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentEmployees = useAppSelector((state) => state.global.employees);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoginData({
      email: "",
      password: ""
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email
          <input
            type="text"
            name="firstName"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="text"
            name="lastName"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;