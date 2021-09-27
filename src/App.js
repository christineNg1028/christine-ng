import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
