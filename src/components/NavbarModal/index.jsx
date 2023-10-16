import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavbarModal = ({ onClose }) => {
  return (
    <div className="fixed w-screen min-h-screen transition-all duration-300 ease-in-out">
      <div className="bg-slate-900 bg-opacity-50 w-full mx-auto min-h-screen backdrop-filter backdrop-blur-lg flex flex-col items-center justify-center">
        <div className="shadow-md bg-slate-900 w-full rounded-xl py-8 px-4 space-y-4 mx-4">
          <div className="flex flex-row justify-between items-center">
            <NavLink
              to="/"
              className="font-semibold text-lg"
              onClick={() => onClose()}
            >
              Home
            </NavLink>
            <button onClick={() => onClose()}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <NavLink
              to="/popular-movies"
              className="font-semibold text-lg"
              onClick={() => onClose()}
            >
              Popular Movies
            </NavLink>
          </div>
          <div>
            <form action="" className="w-full">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md w-full rounded-full"
              />
            </form>
          </div>
          <hr className="outline-none border-none bg-white w-full py-[2px] rounded-full" />
          <div className="mt-8 space-y-4">
            <NavLink
              replace
              to="/login"
              onClick={() => onClose()}
              className="inline-block text-center w-full bg-red-500 hover:bg-red-600 focus:bg-red-700 py-2.5 rounded-md text-white font-semibold"
            >
              Login
            </NavLink>
            <NavLink
              replace
              onClick={() => onClose()}
              to="/register"
              className="inline-block text-center w-full bg-red-500 hover:bg-red-600 focus:bg-red-700 py-2.5 rounded-md text-white font-semibold"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

NavbarModal.propTypes = {
  onClose: PropTypes.func,
};

export default NavbarModal;
