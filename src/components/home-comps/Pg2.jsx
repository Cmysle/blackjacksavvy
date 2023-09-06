import { analysis, luckvsskill, safegambling } from "../../assets";

const Pg2 = ({ targetElementRef }) => {
  return (
    <section
      className="bg-yellow-100 relative w-full sm:h-screen mx-auto flex justify-center flex-wrap gap-20"
      id="targetElementId"
      ref={targetElementRef}
    >
      <div className="bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-11/12 mt-[120px] sm:mt-[250px] h-fit sm:h-[550px]">
        <div className="relative w-full h-[230px]">
          <img
            src={analysis}
            alt="analysis"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">Game Analysis</h3>
          <p className="mt-2 text-gray-400 text-[14px]">Step up your game with BlackjackSavvy's Game Analysis feature! Dive into your gaming sessions to identify winning patterns and pinpoint areas for improvement. It's more than just a game – it's about evolving into a smarter player, one session at a time. Elevate your strategy and edge closer to mastery with every play. Get ready to play smarter and win bigger with BlackjackSavvy.</p>
        </div>
      </div>
      <div className="bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-11/12 sm:mt-[120px] h-fit sm:h-[550px]">
        <div className="relative w-full h-[230px]">
          <img
            src={luckvsskill}
            alt="luckvsskill"
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">Luck vs. Skill</h3>
          <p className="mt-2 text-gray-400 text-[14px]">Blackjack is a game where strategy meets luck. Discover how to blend intuition with calculated play decisions to stack the odds in your favor. It's your turn to master the fine art of balancing luck and skill with BlackjackSavvy.</p>
        </div>
      </div>
      <div className="bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-11/12 sm:mt-[250px] mb-12 sm:mb-0 h-fit sm:h-[550px]">
        <div className="relative w-full h-[230px]">
          <img
            src={safegambling}
            alt="safegambling"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">Secure and Responsible Gaming</h3>
          <p className="mt-2 text-gray-400 text-[14px]">Safety and responsible gaming are our priorities at BlackjackSavvy. Enjoy your gaming journey with the reassurance that our platform upholds the strictest safety standards. Play smart, play safe, play with BlackjackSavvy.</p>
        </div>
      </div>
    </section>
  );
};

export default Pg2;
