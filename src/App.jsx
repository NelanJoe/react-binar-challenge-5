import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PopularMovies from "./pages/PopularMovies";
import Footer from "./components/Footer";
import DetailMovie from "./pages/DetailMovie";


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular-movies" element={<PopularMovies />} />

        {/* Authorization */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<DetailMovie />} />
        <Route path="/details/:movieId" element={<DetailMovie />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
