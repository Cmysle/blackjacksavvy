import { useState } from "react";
import { Link } from "react-router-dom";
import { logoNavbar, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed bg-yellow-300 w-full h-16 flex items-center py-3 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center ml-4"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoNavbar} alt="logoNavbar" className="w-52 h-12" />
        </Link>
        <ul className="list-none hidden sm:flex flew-row gap-10">
          <li
            className={`${
              active === "tracker" ? "text-white" : "text-gray-700"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("tracker");
            }}
          >
            <Link to="/tracker">Tracker</Link>
          </li>
          <li
            className={`${
              active === "stats" ? "text-white" : "text-gray-700"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("stats");
            }}
          >
            <Link to="/stats">Stats</Link>
          </li>
          <li
            className={`${
              active === "profile" ? "text-white" : "text-gray-700"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("profile");
            }}
          >
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer mr-4"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li
                className={`${
                  active === "tracker" ? "text-white" : "text-gray-700"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("tracker");
                }}
              >
                <Link to="/tracker">Tracker</Link>
              </li>
              <li
                className={`${
                  active === "stats" ? "text-white" : "text-gray-700"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("stats");
                }}
              >
                <Link to="/stats">Stats</Link>
              </li>
              <li
                className={`${
                  active === "profile" ? "text-white" : "text-gray-700"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("profile");
                }}
              >
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
