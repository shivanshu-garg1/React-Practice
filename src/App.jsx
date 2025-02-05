import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function App() {
  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Router>
      <Navbar links={NavLinks} name="Shivanshu" />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
