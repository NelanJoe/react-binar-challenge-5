import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import DetailMovie from "./pages/DetailMovie";
import Search from "./pages/Search";


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<DetailMovie />} />
        <Route path="/details/:movieId" element={<DetailMovie />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
