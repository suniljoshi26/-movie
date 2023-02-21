import React, { useState } from "react";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
const Tranding = () => {
  const [endpoint, setEndpoint] = useState("day");
  useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouseSection">
      <ContentWrapper>
        <span className="carouseTitle">Tranding</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Tranding;
