import YouTube from "react-youtube";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Modal = ({ keytube }) => {
<<<<<<< HEAD
  // const videoReady = (event) => {
  //   event.target.playVideo();
  // };
=======
>>>>>>> dfe1257f769fb9514fc31d35b505023649ed4f9c
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      {keytube ? (
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-10/12 max-w-5xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px] relative">
            <YouTube
              className="absolute top-0 left-0 w-full h-full"
<<<<<<< HEAD
              // className="w-full shrink-0 "
              opts={opts}
              videoId={keytube}
              // onReady={videoReady}
              playing={true}
            ></YouTube>
=======
              opts={opts}
              videoId={keytube}
              playing={true}
            />
>>>>>>> dfe1257f769fb9514fc31d35b505023649ed4f9c
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 md:btn-md">
                  ✕
                </button>
              </form>
            </div>
          </div>
        </dialog>
      ) : (
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-10/12 max-w-5xl min-h-[300px] lg:min-h-[350px] flex items-center justify-center">
<<<<<<< HEAD
            <strong className="text-center text-lg md:text-2xl  ">
=======
            <strong className="text-center text-lg md:text-2xl">
>>>>>>> dfe1257f769fb9514fc31d35b505023649ed4f9c
              Trailer Not avalable :(
            </strong>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 md:btn-md">
                  ✕
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

<<<<<<< HEAD
=======
Modal.propTypes = {
  keytube: PropTypes.string,
};

>>>>>>> dfe1257f769fb9514fc31d35b505023649ed4f9c
export default Modal;
