import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noResults from "../../assets/no-results.png";
import Spinner from "../../component/spinner/Spinner";
import { fatchDataFromapi } from "../../utils/api";
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const fetchInitialData = () => {
    setLoading(true);
    fatchDataFromapi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((pre) => pre + 1);
        setLoading(false);
      }
    );
  };

  // const fetchNextPageData = () => {
  //   setLoading(true);
  //   fatchDataFromapi(`/search/multi?query=${query}&page=${pageNum}`).then(
  //     (res) => {
  //       if (data?.results) {
  //         setData({ ...data, results: [...data?.results, ...res.results] });
  //       } else {
  //         setData(res);
  //       }
  //       setPageNum((pre) => pre + 1);
  //     }
  //   );
  // };
  useEffect(() => {
    fetchInitialData();
  }, [query]);
  return (
    <div className="searchResultsPage">
      {/* {loading && <Spinner initial={true} />} */}
    </div>
  );
};

export default SearchResult;
