import { useEffect, useState } from "react";
import { fatchDataFromapi } from "./utils/api";

function App() {
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    fatchDataFromapi("/movie/popular").then((res) => console.log("resS", res));
  };

  return <div className=""></div>;
}

export default App;
