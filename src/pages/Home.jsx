import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <>
      <Carousel />
      <section className="max-w-7xl mx-4 md:mx-auto min-h-screen mt-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-semibold text-xl">Popular Movies</h2>
          <Link className="italic text-red-500">More Popular Movies</Link>
        </div>
        <MovieList />
      </section>
    </>
  );
};

export default Home;
