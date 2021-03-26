import logo from "./logo.svg";
import "./App.css";
import { Banner } from "./Components/Banner";
import { Container } from "react-bootstrap";
import { Projects } from "./Components/Projects";
function App() {
  return (
    <Container>
      <Banner />
      <Projects />
    </Container>
  );
}

export default App;
