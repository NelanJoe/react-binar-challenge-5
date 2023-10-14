import MovieItem from "../MovieItem";

const MovieList = () => {
  return (
    <div className="flex md:flex-row flex-wrap justify-center gap-6">
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  );
};

export default MovieList;
