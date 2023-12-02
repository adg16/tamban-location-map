import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
