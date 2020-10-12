import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="my-auto">
        <form
          className="form-signin mx-auto w-50"
          style={{ marginTop: "200px" }}
        >
          <div className="form-label-group">
            <label for="inputEmail">Email address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
          </div>
          <div className="form-label-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="btn btn-lg btn-secondary btn-block mt-4 sColor"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
