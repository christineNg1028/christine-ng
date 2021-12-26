import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#d8c7b5", dark: "#000", light: "#fff" },
    secondary: { main: "#C1C1C1" },
    background: { default: "#FAF4EB" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Router basename="/">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              exact
              path={["/projects", "/projects/:id"]}
              render={(props) => <Projects {...props} />}
            />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
