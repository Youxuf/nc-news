import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
