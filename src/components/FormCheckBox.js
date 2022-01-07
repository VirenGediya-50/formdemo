import React from "react";
import { Form } from "react-bootstrap";

const FormCheckBox = () => {
  return (
    <Form.Group className="mb-3 checkbox_text" controlId="formBasicCheckbox">
      <Form.Check
        type="checkbox"
        label="I agree to the Term and Conditions."
        required
      />
    </Form.Group>
  );
};

export default FormCheckBox;
