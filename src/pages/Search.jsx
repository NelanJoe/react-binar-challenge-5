import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ENDPOINTS } from "../utils/endpoints";
import MovieList from "../components/MovieList";

const Search = () => {
  const [dataResult, setDataResult] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const [searchParam] = useSearchParams();
  const query = searchParam.get("query");
  const page = searchParam.get("page");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getMovie = async (page, query) => {
      try {
        const SEARCH_URL = ENDPOINTS.searchMovies(page, query);
        const response = await axios.get(SEARCH_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data } = response.data;
        setDataResult(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrors({
            ...errors,
            isError: true,
            message: error?.response?.data?.message,
          });
          return;
        }
        alert(errors.message);
        setErrors({
          ...error,
          isError: true,
          message: error?.message,
        });
      }
    };
    getMovie(page, query);
  }, [page, query, errors]);

  return (
    <>
      <div className="mt-14 mb-8 mx-32 text-2xl font-bold">
        Result from {'"' + query + '"'}
      </div>
      {dataResult.length ? (
        <div className="flex md:flex-row flex-wrap justify-center gap-6 mb-12">
          <MovieList movies={dataResult} />
        </div>
      ) : (
        <div className="h-screen grid place-content-center">
          <h2 className="font-semibold text-xl">
            Not found movies with title{" "}
            <span className="bg-red-500 text-white px-2 py-1 rounded-2xl">{`${query}`}</span>
          </h2>
        </div>
      )}
    </>
  );
};

export default Search;
