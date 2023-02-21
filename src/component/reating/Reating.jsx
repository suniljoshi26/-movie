import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "./style.scss";
import "react-circular-progressbar/dist/styles.css";
const Reating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default Reating;
