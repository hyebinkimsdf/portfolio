import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";

import useScrollToTop from "./hooks/useScrollToTop";
import { Header } from "./compoments/common/Header";
import Eyecane from "./pages/Eyecane";
import { Naver } from "./pages/Naver";
import { DroneGo } from "./pages/DroneGo";
import { Swim360 } from "./pages/Swim360";

function App() {
  useScrollToTop();
  return (
    <>
      <div className="app">
        <main className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eyecane" element={<Eyecane />} />
            <Route path="/naver" element={<Naver />} />
            <Route path="/droneGo" element={<DroneGo />} />
            <Route path="/swim360" element={<Swim360 />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
