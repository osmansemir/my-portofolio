import "./App.css";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function App() {
  useEffect(() => {
    // Initialize Google Analytics once when app loads
    ReactGA.initialize("G-H5F1B6HNVS");

    // Track page views automatically
    ReactGA.send("pageview");
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
