import PropTypes from "prop-types";

const MovieItem = ({ movie }) => {
  let imgSrc;
  if (!movie.poster_path || !movie.backdrop_path) {
    imgSrc = `https://fakeimg.pl/350x200/?text=Not+Available+Image`;
  } else {
    imgSrc = `https://image.tmdb.org/t/p/w300/${
      movie.poster_path || movie.backdrop_path
    }`;
  }

  return (
    <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={imgSrc}
          alt={movie?.title}
const MovieItem = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
          alt="Shoes"
          className="w-full h-[200px] object-top object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie?.title}</h2>
        <p className="italic text-gray-300">{movie?.release_date}</p>
        <p className="">
          <span>⭐</span>
          {movie?.vote_average}
        </p>
        <div
          className="tooltip tooltip-primary tooltip-right"
          data-tip={movie?.overview}
        >
          <p className="truncate cursor-pointer">{movie?.overview}</p>
        </div>
        <div className="card-actions justify-end">
          <a
            className="btn btn-primary inline-flex w-full"
            href={`/movie/${movie?.id}`}
        <h2 className="card-title">Avengers: Endgame</h2>
        <p className="">
          <span>⭐</span>
          7.2
        </p>
        <p>
          After the devastating events of Avengers: Infinity War (2018), the
          universe is in ruins. With the help of remaining allies, the Avengers
          assemble once more in order to reverse Thanos actions and restore
          balance to the universe.
        </p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-primary inline-flex w-full"
            href="/movie/029103190"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </span>
            See Detail
          </a>
        </div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};


export default MovieItem;
