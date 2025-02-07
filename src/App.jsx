import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import TodoList from "./TodoList";
// import ThemeSwitcher from "./ThemeSwitcher";
import { use, useState } from "react";

function App() {
  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Todo", path: "/todo" },
    { name: "Contact", path: "/contact" },
  ];
  const [theme,setTheme] = useState("dark");

  const toggleTheme  = ()=>{
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Router>
      <Navbar links={NavLinks} name="Shivanshu" theme={theme} toggle={toggleTheme} />
      {/* <ThemeSwitcher theme={theme} toggle={toggleTheme}/> */}
      <Routes>
        <Route path="/" element={<ProductList  theme={theme}/>} />
        <Route path="/todo" element={<TodoList theme={theme}/>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
