import React, { Component } from "react";
import axios from "axios";

class PlayerForm extends Component {
  state = {};

  submitPlayer = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000", {
        firstName: this.firstNameField.value,
        lastName: this.lastNameField.value,
        email: this.emailField.value,
        phone: this.phoneField.value,
        speed: Number(this.speedField.value),
        stamina: Number(this.staminaField.value),
        strength: Number(this.strengthField.value),
        technique: Number(this.techniqueField.value),
        team: this.teamField.value,
      })
      .then((response) => {
        console.log("new player added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="row">
        <h3 className="center">Add a new player</h3>
        <form
          className="col s9 offset-s3 container-fluid"
          onSubmit={this.submitPlayer}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                ref={(elem) => (this.firstNameField = elem)}
                type="text"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastName"
                ref={(elem) => (this.lastNameField = elem)}
                type="text"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="phone"
                ref={(elem) => (this.phoneField = elem)}
                type="text"
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                ref={(elem) => (this.emailField = elem)}
                type="text"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <input
                id="speed"
                ref={(elem) => (this.speedField = elem)}
                type="text"
              />
              <label htmlFor="speed">Speed</label>
            </div>
            <div className="input-field col s3">
              <input
                id="stamina"
                ref={(elem) => (this.staminaField = elem)}
                type="text"
              />
              <label htmlFor="stamina">Stamina</label>
            </div>
            <div className="input-field col s3">
              <input
                id="strenth"
                ref={(elem) => (this.strengthField = elem)}
                type="text"
              />
              <label htmlFor="strenth">Strength</label>
            </div>
            <div className="input-field col s3">
              <input
                id="technique"
                ref={(elem) => (this.techniqueField = elem)}
                type="text"
              />
              <label htmlFor="technique">Technique</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="team"
                ref={(elem) => (this.teamField = elem)}
                type="text"
              />
              <label htmlFor="team">Team:</label>
            </div>
          </div>
          <button
            type="submit"
            className="btn waves-effect waves-dark"
            name="action"
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
