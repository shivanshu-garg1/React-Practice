import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import TodoList from "./TodoList";

function App() {
  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Todo", path: "/todo" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Router>
      <Navbar links={NavLinks} name="Shivanshu" />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/todo" element={<TodoList/>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
