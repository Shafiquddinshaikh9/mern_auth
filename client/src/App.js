import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import Notfound from "./screens/notfound/Notfound";
import Footer from "./components/footer/Footer";
import About from "./screens/about/About";
import Services from "./screens/services/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
