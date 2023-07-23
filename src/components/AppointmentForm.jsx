import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AppointmentForm = () => {
  return (
    <section className="container my-4">
      <Row className="justify-content-center ">
        <Col xs={11} md={10} lg={9} className="py-3 shadow formContainer">
          <h6>Llenar el formulario para crear una cita</h6>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="namePet">
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control type="text" name="namePet" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nameOwner">
              <Form.Label>Nombre de dueño/a</Form.Label>
              <Form.Control type="text" name="nameOwner" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                as={Col}
                md={6}
                controlId="appointmentDate"
              >
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" name="appointmentDate" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md={6}
                controlId="appointmentTime"
              >
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" name="appointmentTime" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="symptomsArea">
              <Form.Label>Sintomas</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Sintomas de la mascota..."
              />
            </Form.Group>

            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="primary" type="submit">
                Agregar cita
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default AppointmentForm;
