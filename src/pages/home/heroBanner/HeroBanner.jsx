import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
const HeroBanner = () => {
  const [input, setInput] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && input.length > 0) {
      navigate(`/search/${input}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore nim.
          </span>
          <div className="searchInput">
            <input
              value={input}
              type="text"
              placeholder="Search for a movie or tv show... "
              onKeyUp={searchQueryHandler}
              onChange={(e) => setInput(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
