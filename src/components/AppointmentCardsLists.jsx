import { Button, Card, Col, Form, Row } from "react-bootstrap";

const AppointmentCardsLists = () => {
  return (
    <section className="container my-4">
      <h2>Lista de citas</h2>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="shadow">
              <Card.Header>
                <h5>Mascota: Firulais</h5>
                <h6>Dueño/a: Pepe</h6>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control type="data" value={"20-08-2023"} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control type="time" value={"19:15"} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>sintomas</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={"vomito y fatiga"}
                    disabled
                  />
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger">Borrar</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default AppointmentCardsLists;
