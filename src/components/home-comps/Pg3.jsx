import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { ctabackground } from "../../assets";

const Pg3 = () => {
  return (
    <section className="bg-ctabackground bg-center bg-cover absolute w-full  mx-auto flex">
      <div className="relative bg-yellow-100 opacity-[.80] lg:w-5/12 md:w-7/12 w-5/6 md:h-4/5 h-5/6 flex md:mx-12 mx-auto md:my-12 my-8 rounded-3xl flex flex-col justify-start">
        <h1 className="text-center text-2xl mt-5 h-fit">
          Create Your Winning Profile Today!
        </h1>
        <ul className="self-center pt-10 md:w-11/12 w-5/6">
          <li className="pb-5">
            • Keep a detailed log of every game session, recording your
            strategies, moves, and outcomes. <span className="xl:inline hidden">Understand your gameplay better with each session tracked on BlackjackSavvy.</span>
          </li>
          <li className="pb-5">
            • Dive deeper into your game data with our analysis tools. <span className="xl:inline hidden">Review your play style, identify trends, and make data-driven decisions to improve your strategy over time.</span>
          </li>
          <li className="pb-5">
            • Get a comprehensive view of your gaming performance with our
            insights feature. <span className="xl:inline hidden">Discover your strengths and areas of improvement, helping you
              evolve into a savvy player.
            </span>
          </li>
          <li className="pb-5">
            • With BlackjackSavvy, it's not just about tracking; it's about
            advancing your gameplay. <span className="xl:inline hidden">Use the data and insights to refine your strategies, experiment
              with new approaches, and find the winning edge.
            </span>
          </li>
        </ul>
        <Link to="/profile" className="self-center">
          <button className="bg-black opacity-100 w-48 h-12 text-white rounded-md self-center mt-2">
            Create A Profile
          </button>
        </Link>
        <p className="self-center text-center text-md mt-5 md:w-11/12 w-5/6">
          Become a part of a community where every play is a step towards
          mastery. Play Smarter, Win Bigger.
        </p>
        <p className="self-center text-center text-sm mt-1 md:w-11/12 w-5/6">
          © 2023 BlackjackSavvy. All Rights Reserved.
        </p>
      </div>
      <div className="w-fit h-full my-auto flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="md:block hidden w-5/6 opacity-[.80]"
        />
      </div>
    </section>
  );
};

export default Pg3;
