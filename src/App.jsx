import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
