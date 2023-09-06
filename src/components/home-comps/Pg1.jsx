import { logo } from "../../assets";

const Pg1 = ({ targetElementRef }) => {
  const scrollToElement = () => {
    targetElementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-yellow-100">
      <div className="absolute inset-0 top-[110px] w-full flex justify-center">
        <h1 className="text-4xl text-center">
          Your Ultimate Companion in{" "}
          <span className="text-red-600">Mastering</span> Blackjack
        </h1>
      </div>
      <div className="absolute top-[140px] sm:top-[170px] w-full h-4/5 flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="h-5/6" />
        <button
          className="bg-yellow-300 text-black font-bold w-36 h-14 mt-[-40px] sm:mt-6 rounded-2xl"
          onClick={scrollToElement}
        >
          Show Me More
        </button>
      </div>
    </section>
  );
};

export default Pg1;
