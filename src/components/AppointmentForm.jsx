import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import AppointmentList from "./AppointmentList";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    id: null,
    namePet: "",
    nameOwner: "",
    appointmentDate: "",
    appointmentTime: "",
    symptomsArea: "",
  });

  const appointmentLocalStorage =
    JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [appointmentList, setAppointmentList] = useState(
    appointmentLocalStorage
  );

  const { namePet, nameOwner, appointmentDate, appointmentTime, symptomsArea } =
    formValues;

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(appointmentList));
  }, [appointmentList]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const createData = (data) => {
    data.id = Date.now();
    setAppointmentList([...appointmentList, formValues]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      namePet.trim() === "" ||
      nameOwner.trim() === "" ||
      appointmentDate === "" ||
      appointmentTime === "" ||
      symptomsArea.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "<h5>Debes de llenar todos los campos</h5>",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "<h5>Cita agendada</h5>",
        showConfirmButton: false,
        timer: 1500,
      });
      createData(formValues);
      setFormValues({
        id: null,
        namePet: "",
        nameOwner: "",
        appointmentDate: "",
        appointmentTime: "",
        symptomsArea: "",
      });
    }
  };

  return (
    <>
      <section className="container my-4">
        <Row className="justify-content-center ">
          <Col xs={11} md={10} lg={9} className="py-3 shadow formContainer">
            <h6>Llenar el formulario para crear una cita</h6>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="namePet">
                <Form.Label>Nombre de la mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="namePet"
                  value={namePet}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="nameOwner">
                <Form.Label>Nombre de dueño/a</Form.Label>
                <Form.Control
                  type="text"
                  name="nameOwner"
                  value={nameOwner}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md={6}
                  controlId="appointmentDate"
                >
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    type="date"
                    name="appointmentDate"
                    min="2023-07-31"
                    value={appointmentDate}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md={6}
                  controlId="appointmentTime"
                >
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    name="appointmentTime"
                    value={appointmentTime}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="symptomsArea">
                <Form.Label>Sintomas</Form.Label>
                <Form.Control
                  as="textarea"
                  name="symptomsArea"
                  value={symptomsArea}
                  required
                  onChange={handleChange}
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
      {appointmentList.length === 0 ? (
        <h3 className="text-center my-4">Aún no hay citas</h3>
      ) : (
        <AppointmentList appointmentList={appointmentList} />
      )}
    </>
  );
};

export default AppointmentForm;
