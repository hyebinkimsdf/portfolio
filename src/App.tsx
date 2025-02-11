import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Eyecane from "./pages/Eyecane";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Eyecane" element={<Eyecane />} />
    </Routes>
  );
}

export default App;
