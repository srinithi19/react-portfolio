import React, { useState, } from "react";
import { validateEmail } from '../../utils/helper';


import './Contact.css'

const Contact = () => {
  const [email, setEmail] = useState('');
    const [contactName, setcontactName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if (inputType === 'email') {
          setEmail(inputValue);
      } else if (inputType === 'contactName') {
          setcontactName(inputValue);
      } else {
          setMessage(inputValue);
      }

      switch (errorMessage) {
          case "Email is invalid":
              if (inputType === "email") {
                  setErrorMessage("");
              }
              break;
          case "Please enter your name":
              if (inputType === "contactName") {
                  setErrorMessage("");
              }
              break;
          case "Please enter a message to send":
              if (inputType === "message") {
                  setErrorMessage("");
              }
              break;
          default:
              break;
      }
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          return;

      }
      if (!contactName) {
          setErrorMessage("Please enter your name");
          return;
      }
      if (!message) {
          setErrorMessage(
              "Please enter a message to send"
          );
          return;
      }

      setcontactName('');
      setMessage('');
      setEmail('');
  };

    const handleEmail = (e) => {
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
    }

    const handleName = (e) => {
        if (!contactName) {
            setErrorMessage("Please enter your name");
            return;
        }
    }

    const handleMessage = (e) => {
        if (!message) {
            setErrorMessage(
                "Please enter a message to send"
            );
            return;
        }
    }
  return (
    <section className='section contact' id='contact'>
      <h2>CONTACT</h2>
      <label> Name : </label><input
                            className="input"
                            value={contactName}
                            name="contactName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            onBlur={handleName}
                        />    <br></br>   <br></br>            
                    
      <label> Email : </label> <input
                            className="input"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                            onBlur={handleEmail}
                        /><br></br><br></br>
                       
      <label> Message : </label> <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="textarea"
                        placeholder="Message"
                        onBlur={handleMessage}
                    /><br></br><br></br>
                    

      <button type="button" onClick={handleFormSubmit}>Submit</button>
      {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
    </section>
  )
}

export default Contact