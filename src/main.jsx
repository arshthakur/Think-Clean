import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import OurWork from "./pages/OurWork/OurWork.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Ways from "./pages/Ways/Ways.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<OurWork />} />
      <Route path="ways" element={<Ways />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
