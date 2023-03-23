import { Routes, Route, BrowserRouter } from "react-router-dom";
import Card from "./pages/Card";
import GenerateQR from "./pages/GenrateQR";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenerateQR />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
