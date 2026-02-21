import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={
            <>
              <Hero />
              <About />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <Skills />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects />
          }
        />
        <Route
          path="/education"
          element={
            <Education />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}