import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppointmentForm from "./components/AppointmentForm";

function App() {
  return (
    <>
      <header className="bg-white border-bottom border-3">
        <h5 className="text-center my-3">
          Administracion de veterinaria
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Dog%20Face.png"
            className="iconDogFace"
          />
        </h5>
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
