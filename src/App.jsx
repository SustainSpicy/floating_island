import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { Home, Contact, About, Project } from "./pages";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
