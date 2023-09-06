import { Pg1, Pg2, Pg3 } from "./home-comps";
import React, { useRef } from "react";

const Home = () => {
    const targetElementRef = useRef(null)

  return (
    <>
      <Pg1 targetElementRef={targetElementRef}/>
      <Pg2 targetElementRef={targetElementRef}/>
      <Pg3 />
    </>
  );
};

export default Home;
