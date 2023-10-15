import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import DetailMovie from "./DetailMovie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<DetailMovie />} />
        <Route path="/details/:movieId" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
