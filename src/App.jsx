import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./Views/Home/Home"
import {About} from "./Views/About/About"
import { Contact } from "./Views/Contact/Contact";
import { Projects } from "./Views/Projects/Projects";
import Navbar from "./Components/Navbar";
export function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>} />
        {/* <Route patha='*' element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

