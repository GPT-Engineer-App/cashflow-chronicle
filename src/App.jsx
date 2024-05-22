import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Markets from "./pages/Markets.jsx";
import World from "./pages/World.jsx";
import Opinion from "./pages/Opinion.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/markets" element={<Markets />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/opinion" element={<Opinion />} />
      </Routes>
    </Router>
  );
}

export default App;