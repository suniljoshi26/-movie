import { useEffect, useState } from "react";
import { fatchDataFromapi } from "./utils/api";
// import { getApiConfiguration } from "./store/homeSlice";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    fatchDataFromapi("/movie/popular").then(
      (res) => (console.log("res", res), dispatch(getApiConfiguration(res)))
    );
  };

  return <div className="">{url?.total_pages}</div>;
}

export default App;
