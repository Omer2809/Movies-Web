import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { Container, FormWrap } from "./mystyle/LoginFormStyling";
import { toast } from "react-toastify";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().min(5).label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
      toast.success("New Account Created...");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        toast.info(`${errors.username}`);
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <Container>
        <FormWrap>
          <h1>Sign Up</h1>
          <p>It's free and only takes a minute</p>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("SignUp")}
            {this.renderBottomText("SignUp")}
          </form>
        </FormWrap>
        {this.renderFormFooter("Already", "Login")}
      </Container>
    );
  }
}

export default RegisterForm;
