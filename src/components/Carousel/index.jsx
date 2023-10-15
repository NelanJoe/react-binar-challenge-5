const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full md:h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          className="w-full h-[400px] md:h-full object-cover opacity-30"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-3 right-1 md:right-3 top-1/2 md:top-1/2">
          <a href="#slide3" className="btn btn-sm md:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-sm md:btn-md btn-circle">
            ❯
          </a>
        </div>

        <div className="absolute top-[8%] md:top-[30%] xl:to-1/2 left-0 right-0">
          <div className="flex flex-col justify-center gap-2 break-words w-[300px] md:w-[800px] xl:max-w-6xl mx-auto overflow-hidden">
            <p className="font-semibold text-white md:text-4xl text-xl">
              The Avengers: Age of Ultron
            </p>
            <p className="text-white text-sm xl:text-base">
              Action, Comedy, Romance
            </p>
            <p className="text-white text-sm xl:text-base inline-flex">
              <span>⭐</span>
              7.2
            </p>
            <p className="text-white text-sm xl:text-base text-justify">
              Ketika musuh yang tak terduga muncul, mengancam keselamatan dan
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              alias voluptatum deleniti? Libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eius, molestias.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              <a className="btn xl:btn-md btn-primary" href="/">
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
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </span>
                Watch Trailer
              </a>
              <a className="btn xl:btn-md btn-primary" href="/">
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
      </div>
    </div>
  );
};

export default Carousel;
