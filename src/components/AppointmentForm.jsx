import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

import AppointmentList from "./AppointmentList";

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const appointmentLocalStorage =
    JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [appointmentList, setAppointmentList] = useState(
    appointmentLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(appointmentList));
  }, [appointmentList]);

  const onSubmit = (createdQuotes) => {
    createdQuotes.id = Date.now();
    setAppointmentList([...appointmentList, createdQuotes]);
    reset();
    Swal.fire({
      icon: "success",
      title: "Cita creada",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const deleteAppointment = (appointmentDelete) => {
    let listFilter = appointmentList.filter(
      (itemAppointment) => appointmentDelete.id !== itemAppointment.id
    );
    setAppointmentList(listFilter);
  };

  return (
    <>
      <section className="container my-4">
        <Row className="justify-content-center ">
          <Col xs={11} md={10} lg={9} className="py-3 shadow formContainer">
            <h6 className="text-center">formulario para crear una cita</h6>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="namePet">
                <Form.Label>Nombre de la mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="namePet"
                  {...register("namePet", {
                    required: "El nombre de la mascota es obligatorio.",
                    minLength: {
                      value: 2,
                      message:
                        "El nombre la mascota debe de tener minimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "El nombre la mascota debe de tener maximo 50 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.namePet?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="nameOwner">
                <Form.Label>Nombre del dueño/a</Form.Label>
                <Form.Control
                  type="text"
                  name="nameOwner"
                  {...register("nameOwner", {
                    required: "El nombre del dueño/a es obligatorio.",
                    minLength: {
                      value: 2,
                      message:
                        "El nombre del dueño/a debe de tener minimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "El nombre del dueño/a debe de tener maximo 50 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nameOwner?.message}
                </Form.Text>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md={6}
                  controlId="quoteDate"
                >
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    type="date"
                    name="quoteDate"
                    {...register("quoteDate", {
                      required: "La fecha de la cita es obligatorio.",
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.quoteDate?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md={6}
                  controlId="quoteTime"
                >
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    name="quoteTime"
                    {...register("quoteTime", {
                      required: "La hora de la cita es obligatorio.",
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.quoteTime?.message}
                  </Form.Text>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="symptomsPet">
                <Form.Label>Sintomas</Form.Label>
                <Form.Control
                  as="textarea"
                  name="symptomsPet"
                  rows={3}
                  placeholder="Sintomas de la mascota..."
                  {...register("symptomsPet", {
                    required: "Los sintomas de la mascotas son obligatorios.",
                    minLength: {
                      value: 4,
                      message: "la consulta debe de tener minimo 4 caracteres.",
                    },
                    maxLength: {
                      value: 150,
                      message:
                        "la consulta debe de tener maximo 150 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.symptomsPet?.message}
                </Form.Text>
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
        <h3 className="text-center my-4">
          Aún no hay citas
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Snail.png"
            className="iconSnail"
            width="50"
            height="50"
          />
        </h3>
      ) : (
        <AppointmentList
          appointmentList={appointmentList}
          deleteAppointment={deleteAppointment}
        />
      )}
    </>
  );
};

export default AppointmentForm;
