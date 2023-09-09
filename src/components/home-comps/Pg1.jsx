import { logo } from "../../assets";

const Pg1 = ({ targetElementRef }) => {
  const scrollToElement = () => {
    targetElementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen bg-yellow-100">
      <div className="pt-20 w-full h-screen flex flex-col items-center">
        <h1 className="sm:text-4xl text-3xl text-center sm:w-3/5 w-4/5">
          Your Ultimate Companion in{" "}
          <span className="text-red-600">Mastering</span> Blackjack
        </h1>
        <img src={logo} alt="logo" className="pt-8 pb-8 px-4 h-4/6" />
        <button
          className="bg-yellow-300 text-black font-bold w-36 h-14 rounded-2xl"
          onClick={scrollToElement}
        >
          Show Me More
        </button>
      </div>
      <div className="w-full flex mt-[140px] flex-col justify-center items-center">
      </div>
    </section>
  );
};

export default Pg1;
