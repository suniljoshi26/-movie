import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import Img from "../../../component/lazyLoadImage/Img";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
const HeroBanner = () => {
  const [input, setInput] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && input.length > 0) {
      navigate(`/search/${input}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore nim.
          </span>
          <div className="searchInput">
            <input
              // value={input}
              type="text"
              placeholder="Search for a movie or tv show... "
              // onKeyUp={searchQueryHandler}
              // onChange={(e) => setInput(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
