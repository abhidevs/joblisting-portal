import React from "react";
import { Col, Form } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            value={params.description}
            name="description"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            value={params.location}
            name="location"
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full_time"
            label="FullTime only"
            type="checkbox"
            className="mb-2"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
