import Home from "./components/home";
import Header from "./components/header";
import { Router } from "react-router";
import "./index.css";
import Info from "./components/about_me";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Stuff from "./components/stuff";
function App() {
  return (
    <>
      <Stuff />
      <Contact />
    </>
  );
}

export default App;
