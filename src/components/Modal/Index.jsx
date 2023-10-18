import YouTube from "react-youtube";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Modal = ({ keytube }) => {
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
              opts={opts}
              videoId={keytube}
              playing={true}
            />
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
            <strong className="text-center text-lg md:text-2xl">
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

Modal.propTypes = {
  keytube: PropTypes.string,
};

export default Modal;
