import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Proposal from "./Pages/Proposal";
import SayYes from "./Pages/SayYes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/yes" element={<SayYes />} />
      </Routes>
    </>
  );
};

export default App;
