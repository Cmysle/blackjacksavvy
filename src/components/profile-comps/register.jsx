const register = () => {
  return (
    <div className="w-full h-full flex">
      <div className="bg-yellow-200 p-5 rounded-xl h-4/6 w-4/5 mx-auto my-auto">
        <h1 className="font-bold text-gray-600 text-4xl">Register</h1>
        <div className="mt-8">
          <p>Email:</p>
          <input
            type="email"
            placeholder="Email Address  "
            className="w-full text-xl rounded-md border-2"
          />
        </div>
        <div className="mt-8">
          <p>Password:</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full text-xl rounded-md border-2"
          />
        </div>
        <div className="w-full h-fit flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gray-600 text-white hover:text-gray-400 w-4/12 h-fit rounded-lg justify-self-center text-2xl"
          >
            Submit
          </button>
        </div>
        <div className="flex items-center justify-evenly mt-8">
          <div className="border-2 border-black w-36 h-1"></div>
          <p>OR</p>
          <div className="border-2 border-black w-36 h-1"></div>
        </div>
        <div className="w-full h-fit flex justify-center mt-8">
          <button
            className="text-black hover:text-gray-400 w-8/12 h-fit rounded-lg justify-self-center text-2xl"
            onClick={() => {
              setActive("login");
            }}
          >
            Click To Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default register;
