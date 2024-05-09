import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login, Calendario, Home } from "../containers";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
