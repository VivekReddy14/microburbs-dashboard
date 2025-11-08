import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Suburbs from "./components/Suburbs";
import ListProperties from "./components/ListProperties";
import Property from "./components/Property";
import Header from "./components/Header";
import Footer from "./components/Footer";
import background from './images/main-bg.jpg';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover', // Optional: Adjust as needed
      backgroundRepeat: 'no-repeat', // Optional: Adjust as needed
      minHeight: '100vh' // Optional: Ensure div covers full height
    }} className="home-bg">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suburb/:name" element={<Suburbs />} />
          <Route path="/properties" element={<ListProperties />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      <Footer />
    </div>
       
  );
}

export default App;
