import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.component.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="col-lg-4 col-sm-6 mx-auto m-2">
        <h1 className="mb-4 font-weight-bolder">Already Have An Account?</h1>
        <h5 className="mb-4">Sign in with your email and password</h5>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            id="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
            required
            label="email"
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            id="pass"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
            label="password"
          ></FormInput>
          <div className="form-group button-group">
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton type="submit">Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
