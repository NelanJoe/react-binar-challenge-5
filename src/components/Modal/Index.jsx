import YouTube from "react-youtube";

// eslint-disable-next-line react/prop-types
const Modal = ({ keytube }) => {
  // const videoReady = (event) => {
  //   event.target.playVideo();
  // };
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
              // className="w-full shrink-0 "
              opts={opts}
              videoId={keytube}
              // onReady={videoReady}
              playing={true}
            ></YouTube>
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
            <strong className="text-center text-lg md:text-2xl  ">
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

export default Modal;
