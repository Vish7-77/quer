import "./App.css";
import React from "react";
import Head from "./comps/header/Head";
import Footer from "./comps/footer/Footer";
import Home from "./comps/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Treatment from "./comps/Treatment.jsx"
import Doc from "./comps/Doc"


function App() {
  return (
    <Router>
      <Head />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/treatment" element={<Treatment />}/>
      <Route path="/doctor" element={<Doc />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
