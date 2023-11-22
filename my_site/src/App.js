import Home from "./components/about";
import Header from "./components/header";
import { Router } from "react-router";
import "./index.css";
import Info from "./components/about_me";
import Projects from "./components/projects";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Info />
      <Projects />
    </>
  );
}

export default App;
