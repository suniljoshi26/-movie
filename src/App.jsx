import { useEffect, useState } from "react";
import { fatchDataFromapi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import SearchResult from "./pages/searchResult/SearchResult";
import PageNotFound from "./pages/404/PageNotFound";
import Explore from "./pages/explore/Explore";
import Header from "./component/header/Header";
import Foter from "./component/foter/Foter";

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

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Detail />} />
          <Route path=" /search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Foter />
    </>
  );
}

export default App;
