import Link from "next/link";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const PasswordField = ({
  label,
  name,
  placeholder = "Password",
  changeHandler = (e) => {},
  value = "",
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <InputGroup
        className="wrap-input100 validate-input"
        id="Password-toggle1"
      >
        <span
          className="input-group-text bg-white text-muted"
          onClick={togglePasswordVisibility}
        >
          <i
            className={`zmdi ${
              isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
            } text-muted`}
            aria-hidden="true"
          ></i>
        </span>
        <Form.Control
          name={name}
          className="input100"
          type={isPasswordShown ? "text" : "password"}
          placeholder={placeholder}
          onChange={changeHandler}
          value={value}
        />
      </InputGroup>
    </Form.Group>
  );
};

export default PasswordField;
