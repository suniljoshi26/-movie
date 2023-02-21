import React, { useState } from "react";
import Carousel from "../../../component/carousel/Carousel";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
const Tranding = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouseSection">
      <ContentWrapper>
        <span className="carouseTitle">Tranding</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} />
    </div>
  );
};

export default Tranding;
