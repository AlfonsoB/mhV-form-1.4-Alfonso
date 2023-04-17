import * as React from 'react';
import { useState } from 'react';
import './contactForm.scss';
import { Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addEntry } from '../store/';

export default function contactForm() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const handleName = (event) => {
    const nameValue = event.target.value;
    const isNameValid = nameValue.length !== 0;
    setNameValid(isNameValid);
    setName(nameValue);
  };

  const handleMessage = (event) => {
    const messageValue = event.target.value;
    const isMessageValid = messageValue.length <= 250;
    setMessageValid(isMessageValid);
    setMessage(messageValue);
  };

  const handleEmail = (event) => {
    const emailValue = event.target.value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isEmailValid = emailPattern.test(emailValue);
    setEmail(emailValue);
    setEmailValid(isEmailValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameValid && emailValid && messageValid) {
      dispatch(addEntry({ name, email, message }));
      setName('');
      setEmail('');
      setMessage('');
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  console.log(entries);

  return (
    <div>
      <div className="card-top">
        <h1 style={{ textAlign: 'center' }}>
          We'd love to hear from <b>You</b>!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
          velit, bibendum tristique commodo ut, cursus id libero. Vestibulum
          egestas eros vitae odio interdum, vitae consequat sapien aliquet.
          Curabitur porttitor semper porttitor. Cras metus ex, dignissim et
          massa feugiat, gravida imperdiet sapien.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <Col md={8}>
            <label>Name</label>
            <input type="text" value={name} onChange={handleName} />
          </Col>
        </div>
        <div className="form-group">
          <Col md={8}>
            <label>Email </label>
            <input type="email" value={email} onChange={handleEmail} />
            {!emailValid && email !== '' && (
              <p style={{ color: 'red' }}>
                Please enter a valid email address.
              </p>
            )}
          </Col>
        </div>
        <div>
          <textarea
            id="text-area"
            value={message}
            placeholder="Get in touch!"
            onChange={handleMessage}
          />
          {!messageValid && message !== '' && (
            <p style={{ color: 'red' }}>
              The text entered cannot exceed 250 characters.
            </p>
          )}
        </div>
        <div>
          <Button className="submit-btn" variant="primary" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}
