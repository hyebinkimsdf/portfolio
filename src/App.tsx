// App.tsx

import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Eyecane from "./pages/Eyecane";
import { Header } from "./compoments/home/Header";
import ScrollToTop from "./hook/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="content">
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
