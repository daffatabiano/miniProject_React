import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App () {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )

}

export default App;