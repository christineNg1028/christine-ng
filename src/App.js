import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Photography from "./pages/Photography";
import Journal from "./pages/Journal";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d8c7b5",
      dark: "#000",
      light: "#fff",
      contrastText: "rgba(0, 0, 0, 0.72)",
    },
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
            <Route exact path="/photography">
              <Photography />
            </Route>
            <Route exact path="/journal">
              <Journal />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
