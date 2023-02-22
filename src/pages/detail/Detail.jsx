import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailBanner from "./detailBanner/DetailBanner";

const Detail = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${movie}/${movieId}`);

  return (
    <div>
      <DetailBanner />
    </div>
  );
};

export default Detail;
