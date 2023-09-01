import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     
        <div >
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/project" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Quote />
        </div>
     

      <Footer />
    </div>
  );
}

export default App;
