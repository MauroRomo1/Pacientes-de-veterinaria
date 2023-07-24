import { Form } from "react-bootstrap";

const AppointmentList = ({ appointmentList }) => {
  return (
    <section className="container my-4">
      <h3 className="text-center">Lista de citas</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {appointmentList.map((appointment, index) => (
          <article key={index} className="col">
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
        ))}
      </div>
    </section>
  );
};

export default AppointmentList;
