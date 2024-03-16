import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ maxWidth: "1070px" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
