import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);