import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import Swal from "sweetalert2";
import { signIn, signUp, singInWithGoogle } from "../../../middlewares/auth/auth";

interface Props {
  setIsAuthenticated: any;
}

const LoginForm = ({ setIsAuthenticated }: Props) => {
  const dispatch = useAppDispatch();

  const handleGoogle = async () =>{
    await singInWithGoogle()
    setIsAuthenticated(true);
  }

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
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
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement && activeElement.name === "Login") {
      try {
        signIn(loginData.email, loginData.password).then(() => {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              setIsAuthenticated(true);

              Swal.fire({
                icon: "success",
                title: "Successfully logged in!",
                showConfirmButton: false,
                timer: 1500,
              });
            },
          });
          setLoginData({
            email: "",
            password: "",
          });
        });
      } catch (error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
        console.log({ Error: error });
      }
    } else if (activeElement && activeElement.name === "Register") {
      try {
        signUp(loginData.email, loginData.password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully registered and logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoginData({
              email: "",
              password: "",
            });
          },
        });
      } catch (error) {
        console.log({ Error: error });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email
          <input
            type="text"
            name="email"
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
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

      <input
        style={{ marginTop: "12px", marginLeft: "12px" }}
        type="submit"
        value="Login"
        name="Login"
      />
      <input
        style={{ marginTop: "12px", marginLeft: "12px" }}
        type="submit"
        value="Register"
        name="Register"
      />
      <button onClick={handleGoogle}>Sing In With Google</button>
    </form>
  );
};

export default LoginForm;
