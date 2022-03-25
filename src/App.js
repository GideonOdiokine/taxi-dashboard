import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Riders from "./pages/Riders";

const App = () => {
  return (
    <>
      <Router>
        <Div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/riders" element={<Riders />} />
          </Routes>
        </Div>
      </Router>
    </>
  );
};

export default App;

const Div = styled.div`
  position: relative;
`;
