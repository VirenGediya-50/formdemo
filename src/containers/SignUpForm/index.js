import React, { useRef, useState } from "react";
import { Button, Col, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import FormCheckBox from "../../components/FormCheckBox";
import FormTextField from "../../components/FormTextField";

const SignUpForm = (props) => {
  const { selectedKey } = props;
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      const { firstName, lastName, userName, email, password } = form;
      const requestObj = {
        first_name: firstName.value,
        last_name: lastName.value,
        username: userName.value,
        email: email.value,
        password: password.value,
      };
      return fetch(`http://wren.in:3200/api/sign-up/${selectedKey}`, {
        method: "POST",
        body: JSON.stringify(requestObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          handleReset();
          setMessage(`${selectedKey} Signup Successfully.`);
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            setMessage("");
          }, 3000);

          return res;
        })
        .catch((error) => {
          console.log("Error : " + error);
          setMessage(error);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
            setMessage("");
          }, 3000);
        });
    }
  };

  return (
    <Row sm={12} className="justify-content-center">
      <Col sm={8} xs={8} md={6}>
        <h4 className="header">Create Your Fan Account</h4>
        <Form
          ref={formRef}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row>
            <FormTextField
              label="First name"
              name="firstName"
              id="firstName"
              error={"First name must required."}
              required
            />
            <FormTextField
              label="Last name"
              name="lastName"
              id="lastName"
              error={"Last name must required."}
              required
            />
            <FormTextField
              label="Username"
              name="userName"
              id="userName"
              error={"Username must required."}
              required
            />
            <FormTextField
              label="Email"
              name="email"
              id="email"
              type="email"
              error={"Email must required."}
              required
            />
            <FormTextField
              label="Password"
              name="password"
              id="password"
              type="password"
              error={"Password must required."}
              required
            />
            <FormCheckBox required />
            <Button className="signup_button" variant="primary" type="submit">
              SIGN UP
            </Button>
            <ToastContainer position="top-end" className="p-3">
              <Toast
                show={showSuccess || showError}
                className={`${showError || "success_toaster"}`}
                bg={showError && "danger"}
              >
                <Toast.Body className={"text-white toast_text"}>
                  {message.toUpperCase()}
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUpForm;
