import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Vehicles from "./pages/Vehicles";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}
