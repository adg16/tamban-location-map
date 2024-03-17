import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
