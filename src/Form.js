import React, { Component } from "react";
import {FormErrors} from "./FormErrors.js"


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      formErrors: {email: ""},
      emailValid: false,
      formValid: false
    }
  }
  
  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    
    switch(fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
    }
    
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }
  
  errorClass(error) {
    return(error.length === 0 ? "" : "has-error");
  }
  
  render() {
    return (
      <form 
        className="subscribe__form form" 
        action="https://echo.htmlacademy.ru" 
        method="post"
      >
        <div className="form__error">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div 
          className={`field-text field-text--email ${this.errorClass(this.state.formErrors.email)}`}
        >
          <label className="field-text__item">
            <input 
              className="field-text__input" 
              type="email" 
              name="email" 
              autoComplete="on" 
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleUserInput}
              />
          </label>
        </div>
        <input 
          className="subscribe__btn btn" 
          type="submit" 
          value="Subscribe"
          onClick={this.handleSubmit}
          disabled = {!this.state.formValid}
        />
      </form>
    );
  }
}


export default Form;