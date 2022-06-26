import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./routes/login";
import Home from "./routes/home/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
