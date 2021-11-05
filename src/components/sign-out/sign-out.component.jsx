import React from "react";

import { auth, addUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-out.component.styles.scss";

class SignOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async function (e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Try again!");
      //guard close
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await addUserProfileDocument(user, { name });

      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return (
      <div className="col-lg-5 col-sm-6 mx-auto m-2">
        <h1 className="mb-4 font-weight-bolder">Sign up</h1>
        <h5 className="mb-4">Create a new account to start shopping</h5>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
            placeholder="name"
            required
            label="name"
          ></FormInput>
          <FormInput
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
            label="email"
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={this.handleChange}
            placeholder="email"
            label="password"
            required
          ></FormInput>
          <FormInput
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="email"
            label="confirm password"
            required
          ></FormInput>
          <div className="form-group button-group">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignOut;
