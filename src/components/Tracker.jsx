const Tracker = () => {
  return (
    <section className="relative w-full h-screen bg-yellow-100">
      <div className="h-32 overflow-hidden">
        <div className="mt-16">
          <div
            className="absolute w-full h-3/5 bg-green-400 rounded-bl-full rounded-br-full"
            style={{
              clipPath: "ellipse(50% 100% at 50% 0%)",
            }}
          ></div>
        </div>
      </div>
      <div className="">
        <p className="absolute a">test</p>
      </div>
    </section>
  );
};

export default Tracker;
