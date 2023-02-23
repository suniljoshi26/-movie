import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import VideosSection from "../videosection/VideoSection";
import Cast from "./cast/Cast";
import DetailBanner from "./detailBanner/DetailBanner";

const Detail = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailBanner video={data?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
    </div>
  );
};

export default Detail;
