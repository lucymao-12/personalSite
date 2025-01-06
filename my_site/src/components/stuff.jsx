import React, { useState } from "react";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import About from "./about_me.jsx";
import Header from "./header.jsx";

function Stuff() {
  const [showProject, setShowProject] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");
  const [homeKey, setHomeKey] = useState(0); // Add a key to force Home reloading

  const infoComponents = {
    Home: () => <Home key={homeKey} />,
    About: About,
    Projects: Projects,
  };

  const SelectedComponent = selectedPage ? infoComponents[selectedPage] : Home;

  return (
    <>
      <Header
        onSelect={(item) => {
          setSelectedPage(item);
          if (item === "Home") {
            setHomeKey((prevKey) => prevKey + 1); // Increment key to reset Home
          }
        }}
      />
      <SelectedComponent />
    </>
  );
}

export default Stuff;
