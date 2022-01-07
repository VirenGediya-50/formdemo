import React from "react";
import { Col, Form } from "react-bootstrap";

const FormTextField = (props) => {
  const { label, required, onChange, name, type, error } = props;
  return (
    <Form.Group
      className="textfield_div"
      as={Col}
      md="12"
      controlId="validationCustom03"
    >
      <Form.Label className="textfield_label">
        {label + (required && " *")}
      </Form.Label>
      <Form.Control
        className="textfield_input"
        name={name}
        type={type || "text"}
        placeholder={label}
        onChange={onChange}
        required
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormTextField;
