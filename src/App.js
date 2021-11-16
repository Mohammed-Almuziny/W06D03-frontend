import { Routes, Route } from "react-router";
import "./App.css";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { LogIN } from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIN />} />
      </Routes>
    </div>
  );
}

export default App;
