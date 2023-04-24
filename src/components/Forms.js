import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const Forms = () => {
  const [input, setInput] = useState({
    username: "",
    age: "",
    email: "",
    phone: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const changeHandle = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const CheckValidations = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!input.username) {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
    if (input.age.length > 24) {
      setAgeError("Candidate age must be above 24");
    } else {
      setAgeError("");
    }
    if (!input.email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (input.email) {
      if (!input.email.match(mailformat)) {
        setEmailError("Invalid email formate");
      } else {
        setEmailError("");
      }
    }
    if (input.phone.length > 12) {
      setPhoneError("Length of phone is less then 12");
    } else {
      setPhoneError("");
    }
    if (input.password.length > 10 && input.password.length < 4) {
      setPasswordError("password length is not greater 10 and not less then 4");
    } else {
      setPasswordError("");
    }
    if (!input.password) {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          margin="auto"
          alignItems={"center"}
          maxWidth={440}
          marginTop={20}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign={"center"}>
            Validation Form
          </Typography>
          <TextField
            type="text"
            placeholder="username..."
            margin="normal"
            name="username"
            onChange={changeHandle}
            value={input.username}
            error={!!usernameError}
            helperText={usernameError}
          ></TextField>
          <TextField
            type="text"
            value={input.age}
            name="age"
            placeholder="age..."
            margin="normal"
            error={!!ageError}
            helperText={ageError}
            onChange={changeHandle}
          ></TextField>
          <TextField
            type="email"
            value={input.email}
            name="email"
            placeholder="email..."
            margin="normal"
            error={!!emailError}
            helperText={emailError}
            onChange={changeHandle}
          ></TextField>
          <TextField
            type="text"
            name="phone"
            value={input.phone}
            placeholder="phone..."
            margin="normal"
            error={!!phoneError}
            helperText={phoneError}
            onChange={changeHandle}
          ></TextField>
          <TextField
            type="password"
            name="password"
            value={input.password}
            placeholder="password..."
            margin="normal"
            error={!!passwordError}
            helperText={passwordError}
            onChange={changeHandle}
          ></TextField>
          <Button
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3 }}
            type="submit"
            onClick={CheckValidations}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Forms;
