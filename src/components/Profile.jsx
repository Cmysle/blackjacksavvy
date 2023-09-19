import { useState } from "react";
import { logo } from "../assets";
import register from "./profile-comps/register";
import login from "./profile-comps/login";

const Profile = () => {
  const [active, setActive] = useState("register");

  return (
    <section className="relative w-full h-screen bg-yellow-100 flex overflow-hidden">
      <div className="mt-8 absolute w-full h-screen flex">
        <div className="my-auto mx-auto sm:w-4/6 w-5/6 sm:h-5/6 h-4/6 bg-yellow-300 rounded-2xl flex lg:divide-x-2 lg:divide-black border-2 border-black">
          <div className="w-1/2 h-full flex flex-col items-center lg:flex hidden">
            <img src={logo} alt="logo" className="px-4 my-auto" />
          </div>
          <div className="lg:w-1/2 w-11/12 h-full flex mx-auto">
            {active === "register" ? (
              <div className="w-full h-full flex">
                <div className="bg-yellow-200 p-5 rounded-xl lg:h-4/6 h-5/6 lg:w-4/5 sm:w-5/6 w-full mx-auto my-auto grid grid-rows-[1.5fr_0.75fr_0.76=5]">
                  <h1 className="font-bold text-gray-600 text-4xl">Register</h1>
                  <div className="">
                    <p>Email Address:</p>
                    <input
                      type="email"
                      className="w-full md:text-xl text-sm rounded-md border-2"
                    />
                  </div>
                  <div className="">
                    <p>Password:</p>
                    <input
                      type="password"
                      className="w-full md:text-xl text-sm rounded-md border-2"
                    />
                  </div>
                  <div className="w-full h-fit flex justify-center">
                    <div className="sm:w-4/12 w-7/12 h-fit flex justify-center">
                      <button
                        type="submit"
                        className="bg-gray-600 text-white hover:text-gray-400 w-full h-fit rounded-lg justify-self-center text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_35px_1fr] justify-items-center items-center">
                    <div className="border-2 border-black w-full h-1"></div>
                    <p>OR</p>
                    <div className="border-2 border-black w-full h-1"></div>
                  </div>
                  <div className="w-full h-fit flex justify-center">
                    <button
                      className="text-black hover:text-gray-400 sm:w-8/12 w-full h-fit rounded-lg justify-self-center sm:text-xl text-lg"
                      onClick={() => {
                        setActive("login");
                      }}
                    >
                      Click To Log In
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex">
                <div className="bg-yellow-200 p-5 rounded-xl lg:h-4/6 h-5/6 lg:w-4/5 sm:w-5/6 w-full mx-auto my-auto grid grid-rows-[1.5fr_0.75fr_0.76=5]">
                  <h1 className="font-bold text-gray-600 text-4xl">Log In</h1>
                  <div className="">
                    <p>Email Address:</p>
                    <input
                      type="email"
                      className="w-full md:text-xl text-sm rounded-md border-2"
                    />
                  </div>
                  <div className="">
                    <p>Password:</p>
                    <input
                      type="password"
                      className="w-full md:text-xl text-sm rounded-md border-2"
                    />
                  </div>
                  <div className="w-full h-fit flex justify-center">
                    <div className="sm:w-4/12 w-7/12 h-fit flex justify-center">
                      <button
                        type="submit"
                        className="bg-gray-600 text-white hover:text-gray-400 w-full h-fit rounded-lg justify-self-center text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_35px_1fr] justify-items-center items-center">
                    <div className="border-2 border-black w-full h-1"></div>
                    <p>OR</p>
                    <div className="border-2 border-black w-full h-1"></div>
                  </div>
                  <div className="w-full h-fit flex justify-center">
                    <button
                      className="text-black hover:text-gray-400 sm:w-8/12 w-full h-fit rounded-lg justify-self-center sm:text-xl text-lg"
                      onClick={() => {
                        setActive("register");
                      }}
                    >
                      Click To Register
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
