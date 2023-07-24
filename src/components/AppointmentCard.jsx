import { Form } from "react-bootstrap";

const AppointmentCard = ({ appointment }) => {
  return (
    <article className="col">
      <div className="card shadow">
        <div className="card-header">
          <h5>Mascota: {appointment.namePet}</h5>
          <h6>Dueño/a: {appointment.nameOwner}</h6>
        </div>
        <div className="card-body">
          <Form.Group className="mb-3">
            <Form.Label>Fecha:</Form.Label>
            <Form.Control
              type="date"
              value={appointment.appointmentDate}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hora:</Form.Label>
            <Form.Control
              type="time"
              value={appointment.appointmentTime}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sintomas:</Form.Label>
            <Form.Control
              as={"textarea"}
              rows={2}
              value={appointment.symptomsArea}
              disabled
            />
          </Form.Group>
        </div>
        <div className="card-footer d-grid">
          <button className="btn btn-danger">Borrar</button>
        </div>
      </div>
    </article>
  );
};

export default AppointmentCard;
