// import logo from "./logo.svg";
import "./App.css";
import ContactoComponent from "./components/contacto";
import { Contacto } from "./models/contacto.class";

function App() {
  return (
    <div className="App">
      <ContactoComponent contact={new Contacto("Angel", "Mamani Corbalan", "artozari@gmail.com", true)}></ContactoComponent>
    </div>
  );
}

export default App;
