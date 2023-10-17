import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PopularMovies from "./pages/PopularMovies";
import DetailMovie from "./pages/DetailMovie";
import Search from "./pages/Search";

import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ProtectedRoute from "./wrapper/ProtectedRoute";
import GuestRoute from "./wrapper/GuestRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
          <Route path="/movie/:movieId" element={<DetailMovie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Authorization */}
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
