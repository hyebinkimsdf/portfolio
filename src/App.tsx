// App.tsx

import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Eyecane from "./pages/Eyecane";
import { Header } from "./compoments/home/Header";

import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();
  return (
    <>
      <div className="app">
        <main className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Eyecane" element={<Eyecane />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
