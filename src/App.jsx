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
import NotFound from './components/NotFound';
import ProjectDetails from './components/ProjectDetails';



import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main content wrapper with padding-top to prevent navbar overlap
const MainContent = ({ children }) => {
  return (
    <main style={{ paddingTop: '76px', minHeight: 'calc(100vh - 200px)' }}>
      {children}
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <MainContent>
        <Routes>
          {/* 🏠 Home Page */}
          <Route path="/" element={<Home />} />

          {/* 👨‍💻 About Page */}
          <Route
            path="/about"
            element={
              <>
                <Hero />
                <About />
              </>
            }
          />

          {/* 🛠 Skills */}
          <Route path="/skills" element={<Skills />} />

          {/* 🚀 Projects */}
          <Route path="/projects" element={<Projects />} />

          {/* 🎓 Education */}
          <Route path="/education" element={<Education />} />

          {/* 📜 Certificates */}
          <Route path="/certificates" element={<Certificate />} />

          {/* 📞 Contact */}
          <Route path="/contact" element={<Contact />} />

          // Add route
          <Route path="/projects/:id" element={<ProjectDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>

      <Footer />
    </BrowserRouter>
  );
}