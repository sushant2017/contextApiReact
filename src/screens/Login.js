import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { doLogin } from "../services";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [CommonError, setCommonError] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const handleChange = (e) => {
    setCommonError("");
    const { name, value } = e.target;
    console.log(name.length);
    switch (name) {
      case "email":
        const validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (!validEmailRegex.test(value)) {
          setEmail(value);
          setEmailError("Email is not valid");
        } else {
          setEmail(value);
          setEmailError("");
        }
        break;
      case "password":
        console.log(value);
        if (value.length <= 5) {
          setPassword(value);
          setPasswordError("You have to enter at least 5 Characters");
        } else {
          setPassword(value);
          setPasswordError("");
        }
        break;
      default:
        return name;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      console.log(email);
      const data = { username: email, password: password };
      doLogin(data).then((response) => {
        if (response) {
          if (response.token) {
            localStorage.setItem("token", response.token);
            setisLogin(true);
            history.push("/");
          } else {
            setCommonError(response.message);
          }
        }
      });
    } else {
      setCommonError("Please Enter Email and Password");
      setEmailError("");
      setPasswordError("");
    }
  };

  return (
    <Grid row={"true"} item lg={12} style={{ textAlign: "center" }}>
      {!isLogin ? (
        <div>
          <h1>Login</h1>
          {CommonError ? <span className="error">{CommonError}</span> : ""}
          <form onSubmit={handleSubmit}>
            <TextField
              id="Username"
              label="Email"
              type="text"
              onChange={handleChange}
              // value={email}
              name="email"
            />
            <br />
            {setEmailError ? <span className="error">{emailError}</span> : ""}
            <br />
            <br />
            <TextField
              id="Password"
              label="Password"
              type="password"
              onChange={handleChange}
              // value={password}
              name="password"
            />
            <br />
            {setPasswordError ? (
              <span className="error">{passwordError}</span>
            ) : (
              ""
            )}
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </div>
      ) : (
        "User is logged in "
      )}
    </Grid>
  );
}

export default Login;
