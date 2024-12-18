import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
