import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Seats from "./pages/Seats";
import Summary from "./pages/Summary";
import Success from "./pages/Success";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/success" element={<Success />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}