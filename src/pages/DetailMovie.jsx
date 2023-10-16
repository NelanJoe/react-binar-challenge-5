import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal/Index";

const DetailMovie = () => {
  const [key, setKey] = useState("");
  const [dataFilm, setDataFilm] = useState([]);
  const [videos, setVideos] = useState([]);
  const { movieId } = useParams();
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const show = () => {
    document.getElementById("my_modal_4").showModal();
    console.log("show");
  };
  useEffect(() => {
    const getData = async (id) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IkZhaG1pIEFsZmFyZXphIiwiZW1haWwiOiJmYWxmYXJlemExQGJpbmFyYWNhZGVteS5vcmciLCJpYXQiOjE2OTMxODEzMTV9.ki5wCImtVV7qOhzZHf5A4RuxcU7XcAdMQ5QLVTe_6zY`,
            },
          }
        );
        const data = response?.data;
        setDataFilm(data?.data);
        setVideos(data?.data?.videos);
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
    getData(movieId);
  }, [errors, movieId]);
  useEffect(() => {
    const getKey = () => {
      if (videos && videos.length > 0) {
        const getTrailer = videos
          .filter((item) => item.type.includes("Trailer"))
          .slice(0, 1);
        const getKey = getTrailer[0].key;
        setKey(getKey);
        console.log(key);
      }
    };
    if (videos) {
      getKey();
    }
  }, [dataFilm, key, videos]);
  return (
    <>
      <div className="hero min-h-screen bg-base-200 bg-[url('https://image.tmdb.org/t/p/original/dqK9Hag1054tghRQSqLSfrkvQnA.jpg')]">
        <div className="hero-content flex-col justify-start md:flex-row xl:flex-row w-full space-x-9">
          <img
            src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            className=" rounded-lg shadow-2xl w-8/12 md:w-3/12 xl:3/12"
          />
          <div className="space-y-3 justify-start md:w-7/12">
            <h1 className="text-5xl font-bold ">
              The Fast and the Furious 2001
            </h1>
            <p className="">
              Genre :{" "}
              <i>
                <strong>Crime/Adventure 1h 46m !</strong>
              </i>
            </p>
            <p className="">⭐ 7.5/10</p>
            <p className="">
              <strong className="text-2xl">overview : </strong> Provident
              cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt dolore quo labore repudiandae!
            </p>
            <button className="btn btn-primary" onClick={() => show()}>
              View Trailer
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} keytube={key}></Modal>
    </>
  );
};

export default DetailMovie;
