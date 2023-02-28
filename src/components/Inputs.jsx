import React from "react";
import "../sass/input.scss";

export const Inputs = ({desc ,type, name , id}) => {
  return (
    <div className="container__input">
      <input
        className="input"
        type={type}
        placeholder=""
        name={name}
      />

      <label id={id} className="label" >
        {desc} :
      </label>
      <span className="input__line"></span> 

      </div>
  
  );
};
