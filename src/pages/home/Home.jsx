import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
import Tranding from "./tranding/Tranding";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Tranding />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
