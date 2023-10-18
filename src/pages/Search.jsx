import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { ENDPOINTS } from "../utils/endpoints";

const Search = () => {
  const [dataResult, setDataResult] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const token = localStorage.getItem("token");
  const [searchParam] = useSearchParams();
  const query = searchParam.get("query");
  const page = searchParam.get("page");

  useEffect(() => {
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
      <div className="flex md:flex-row flex-wrap justify-center gap-6">
        {dataResult?.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </div>
    </>
  );
};

export default Search;
