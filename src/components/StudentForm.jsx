import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export function StudentForm({ addStudent, students }) {
  const [validated, setValidated] = useState(false);
  const [student, setStudent] = useState({ name: "", age: "" });
  const [nameError, setNameError] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Check if name is unique
      const isNameUnique = !students.some((s) => s.name === student.name);
      if (isNameUnique) {
        addStudent(student);
        setStudent({ name: "", age: "" });
        setValidated(false);
        setNameError("");
      } else {
        setNameError("Name must be unique.");
      }
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-light"
    >
      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="name"
            value={student.name}
            onChange={handleChange}
            pattern=".{3,}" // At least 3 characters
          />
          <Form.Control.Feedback type="invalid">
            Name must be at least 3 characters long.
          </Form.Control.Feedback>
          {nameError && <div className="text-danger">{nameError}</div>}
          
        </Form.Group>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Age"
            name="age"
            value={student.age}
            onChange={handleChange}
            min="18"
          />
          <Form.Control.Feedback type="invalid">
            You must be at least 18 years old.
          </Form.Control.Feedback>
          
        </Form.Group>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col md="6">
          <Button type="submit" className="w-100">
            Submit form
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
