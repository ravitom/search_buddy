import React from "react";
import "./sort.styles.css";

export const SortData = (props) => {
  return (
    <div id="" className="sort">
      <input
        className="css-input"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        type="serach"
      ></input>

      <input
        type="checkbox"
        value="male"
        id="male"
        onChange={props.genderSelect}
      ></input>
      <label for="male">Male</label>
      <input
        type="checkbox"
        value="female"
        id="female"
        onChange={props.genderSelect}
      ></input>
      <label for="female">Female</label>
    </div>
  );
};
