import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { Link } from "react-router-dom";
import {
  FormFooter,
  BottomText,
  FooterLink,
  Button,
} from "./../mystyle/FormStyling";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <Button disabled={this.validate()} className="btn">
        {label}
      </Button>
    );
  }

  
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderBottomText(label) {
    return (
      <BottomText>
        By clicking the {label} button, you agree to our
        <Link to="#">Terms &amp; Conditions</Link> and
        <Link to="#"> Privacy Policy</Link>
      </BottomText>
    );
  }
  renderFormFooter(text, label) {
    return (
      <FormFooter>
        <p>
          {text} have an account?{" "}
          <FooterLink to={label === "Login" ? "/login" : "/register"} >
            {label} Here
          </FooterLink>
        </p>
      </FormFooter>
    );
  }
}

export default Form;
