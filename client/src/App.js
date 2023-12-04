import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router";
import Test from "./Test";
import Success from "./Success";
import Cancel from "./Cancel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
}

export default App;
