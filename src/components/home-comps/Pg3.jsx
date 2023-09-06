import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Pg3 = () => {
  return (
    <section className="bg-[url(https://tunicatravel.com/wp-content/uploads/CZ4A2219-scaled.jpg)] bg-center bg-cover absolute w-full h-screen mx-auto flex">
      <div className="relative bg-yellow-100 opacity-[.80] sm:w-1/3 w-5/6 sm:h-4/5 h-5/6 flex sm:ml-24 ml-8 sm:mt-32 mt-16 rounded-3xl flex flex-col justify-start">
        <h1 className="text-center text-2xl mt-5 h-fit">
          Create Your Winning Profile Today!
        </h1>
        <ul className="self-center pt-10 sm:w-[440px] w-[280px]">
          <li className="pb-5">
            • Keep a detailed log of every game session, recording your
            strategies, moves, and outcomes.
            <span className="sm:block hidden">
              {" "}
              Understand your gameplay better with each session tracked on
              BlackjackSavvy.
            </span>
          </li>
          <li className="pb-5">
            • Dive deeper into your game data with our analysis tools.
            <span className="sm:block hidden">
              {" "}
              Review your play style, identify trends, and make data-driven
              decisions to improve your strategy over time.
            </span>
          </li>
          <li className="pb-5">
            • Get a comprehensive view of your gaming performance with our
            insights feature.
            <span className="sm:block hidden">
              {" "}
              Discover your strengths and areas of improvement, helping you
              evolve into a savvy player.
            </span>
          </li>
          <li className="pb-5">
            • With BlackjackSavvy, it's not just about tracking; it's about
            advancing your gameplay.
            <span className="sm:block hidden">
              {" "}
              Use the data and insights to refine your strategies, experiment
              with new approaches, and find the winning edge.
            </span>
          </li>
        </ul>
        <Link to="/profile" className="self-center">
          <button className="bg-black opacity-100 w-48 h-12 text-white rounded-md self-center mt-2">
            Create A Profile
          </button>
        </Link>
        <p className="self-center text-center text-md mt-5 sm:w-[440px] w-[280px]">
          Become a part of a community where every play is a step towards
          mastery. Play Smarter, Win Bigger.
        </p>
        <p className="self-center text-center text-sm mt-1 sm:w-[440px] w-[280px]">
          © 2023 BlackjackSavvy. All Rights Reserved.
        </p>
      </div>
      <div className="w-fit h-full flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="sm:block hidden w-2/3 opacity-[.80]"
        />
      </div>
    </section>
  );
};

export default Pg3;
