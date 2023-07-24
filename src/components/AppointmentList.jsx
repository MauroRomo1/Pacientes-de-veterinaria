import AppointmentCard from "./AppointmentCard";

const AppointmentList = ({ appointmentList }) => {
  return (
    <section className="container my-4">
      <h3 className="text-center">Lista de citas</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {appointmentList.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </section>
  );
};

export default AppointmentList;
