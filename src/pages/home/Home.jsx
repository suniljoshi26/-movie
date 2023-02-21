import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import Tranding from "./tranding/Tranding";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Tranding />
      <Popular />
    </div>
  );
};

export default Home;
