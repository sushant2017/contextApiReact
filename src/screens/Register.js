import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { doRegister } from "../services";
import Grid from "@material-ui/core/Grid";
const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [CommonError, setCommonError] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
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
        if (value.length < 5) {
          setPassword(value);
          setPasswordError("You have to enter at least 5 Characters");
        } else {
          setPassword(value);
          setPasswordError("");
        }
        break;
      case "address":
        if (value == "") {
          setAddress(value);
          setAddressError("Address is required");
        } else {
          setAddress(value);
          setAddressError("");
        }
        break;
      default:
        return name;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "" && address !== "") {
      const data = { username: email, password: password, address: address };
      doRegister(data).then((response) => {
        if (response) {
          if (response.status == "success") {
            setisLogin(true);
            history.push("/");
          } else {
            setCommonError(response.message);
          }
        }
      });
    } else {
      setCommonError("Please Enter Email , Password and Address");
      setEmailError("");
      setPasswordError("");
      setAddressError("");
    }
  };
  return (
    <Grid row={"true"} item lg={12} style={{ textAlign: "center" }}>
      <h1>Register</h1>
      {CommonError ? <span className="error">{CommonError}</span> : ""}
      <h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="Username"
            label="Email"
            onChange={handleChange}
            type="text"
            name="email"
          />
          <br />
          {setEmailError ? <span className="error">{emailError}</span> : ""}
          <br />
          <TextField
            id="Password"
            label="Password"
            type="text"
            onChange={handleChange}
            name="password"
          />
          <br />
          {setPasswordError ? (
            <span className="error">{passwordError}</span>
          ) : (
            ""
          )}
          <br />
          <TextField
            id="Address"
            label="Address"
            onChange={handleChange}
            type="text"
            name="address"
          />
          <br />
          {setAddressError ? <span className="error">{addressError}</span> : ""}
          <br />
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </h1>
    </Grid>
  );
};

export default Register;
