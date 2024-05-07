import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<Home />} />
        <Route path="/articles/:articleId" element={<Articles />} />
        <Route path="/*" element={<Navigate to="/articles" />} />
      </Routes>
    </>
  );
}

export default App;
