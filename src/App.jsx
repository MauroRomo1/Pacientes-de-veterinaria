import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppointmentForm from "./components/AppointmentForm";

function App() {
  return (
    <>
      <header>
        <h4 className="text-center my-3">
          Administracion pacientes de veterinaria
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Dog%20Face.png"
            className="iconDogFace"
          />
        </h4>
        <hr />
      </header>
      <main>
        <AppointmentForm />
      </main>
      <footer>
        <h6 className="text-center my-3">
          &copy; Todos los derechos reservados
        </h6>
      </footer>
    </>
  );
}

export default App;
