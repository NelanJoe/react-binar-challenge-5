import YouTube from "react-youtube";

// eslint-disable-next-line react/prop-types
const Index = ({ keytube }) => {
  const videoReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  const opts = {
    height: "500",
    width: "975",
    playerVars: {
      autoplay: 1,
    },
  };
  //   console.log(key);
  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <YouTube
            opts={opts}
            videoId={keytube}
            onReady={videoReady}
            playing={true}
          ></YouTube>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Index;
