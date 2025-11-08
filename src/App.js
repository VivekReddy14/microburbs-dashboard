import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Suburbs from "./components/Suburbs";
import ListProperties from "./components/ListProperties";
import Property from "./components/Property";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suburb/:name" element={<Suburbs />} />
      <Route path="/properties" element={<ListProperties />} />
      <Route path="/property/:id" element={<Property />} />
    </Routes>
  );
}

export default App;
