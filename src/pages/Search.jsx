import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { data } from "autoprefixer";

const Search = () => {
  const [dataResult, setDataResult] = useState([]);
  const [searchParam] = useSearchParams();
  const query = searchParam.get("query");
  const page = searchParam.get("page");
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/search/movie?query=${query}&page=${page}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IkZhaG1pIEFsZmFyZXphIiwiZW1haWwiOiJmYWxmYXJlemExQGJpbmFyYWNhZGVteS5vcmciLCJpYXQiOjE2OTMxODEzMTV9.ki5wCImtVV7qOhzZHf5A4RuxcU7XcAdMQ5QLVTe_6zY`,
            },
          }
        );
        const data = response?.data;
        setDataResult([data?.data]);
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
    getMovie();
    console.log(dataResult);
  }, [query]);

  return (
    <>
      <h3>Result from {'"' + query + '"'}</h3>
      <div className="flex md:flex-row flex-wrap justify-center gap-6">
        {dataResult.map((item) => (
          <MovieItem key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Search;
